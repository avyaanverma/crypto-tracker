import streamlit as st
import yfinance as yf
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error
from math import sqrt
import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV
#streamlit run crypto_prediction.py



def predict_crypto_prices(crypto_name):
    data = yf.download(crypto_name, period='max')

    
    data['Previous_Open'] = data['Open'].shift(1)
    data['Previous_Close'] = data['Close'].shift(1)
    data['Previous_Low'] = data['Low'].shift(1)
    data['Previous_High'] = data['High'].shift(1)

  


    


    data = data.dropna()

    features = ['Previous_Open', 'Previous_Close', 'Previous_Low', 'Previous_High']
    predictions = ['Open', 'Close', 'Low', 'High']

    predicted_values = pd.DataFrame(columns=['Open', 'Close', 'Low', 'High', 'Value'])

    for feature, prediction in zip(features, predictions):
        X = data[feature].values.reshape(-1, 1)
        y = data[prediction].values

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        n_iter_without_improvement=5

        hyperparameter_grid = {
    'n_estimators': [50, 100, 150],
    'learning_rate': [0.05, 0.1, 0.2],
    'max_depth': [3, 5, 8],
    'min_child_weight': [1, 3, 5],
    'gamma': [0, 0.1, ],
}


       
        model = GridSearchCV(XGBRegressor(objective='reg:squarederror'), hyperparameter_grid, cv=5, scoring='neg_mean_squared_error' , )
        model.fit(X_train, y_train)

        test_predictions = model.predict(X_test)
        test_rmse = sqrt(mean_squared_error(y_test, test_predictions))

       
        predicted_values[prediction] = model.predict(np.array(data[prediction].iloc[-1]).reshape(1, -1))
        predicted_values['RMSE_' + prediction] = test_rmse 

    predicted_values['Value'] = predicted_values.mean(axis=1)

    return predicted_values




st.title('Cryptocurrency Price Prediction')

crypto_name = st.text_input('Enter the cryptocurrency symbol (e.g., BTC-USD)', value='BTC-USD')
if st.button('Predict'):
    predicted_prices = predict_crypto_prices(crypto_name)

    
    st.write('Predicted Prices and Value:')
    st.dataframe(predicted_prices)

    
    st.write('RMSE Values:')
    for col in predicted_prices.columns:
        if col.startswith('RMSE_'):
            st.write(f"{col}: {predicted_prices[col].values[0]}")
