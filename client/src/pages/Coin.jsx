import React from 'react'
import './Coin.css'


const Coin = ({id, name, image, symbol, marketcap, price, pricechange, volume}) => {
    return (
        <div className="coin-container" key={id}>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price }</p>
                    <p className="coin-volume">${ volume ? volume.toLocaleString() : 'NA'}</p>
                    {pricechange < 0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt Cap: Rs.{marketcap ? marketcap.toLocaleString() : 'NA'}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Coin