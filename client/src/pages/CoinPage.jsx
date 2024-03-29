import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Axios from 'axios';
import './CoinPage.css'; // Import CSS file for styling
import { Line } from 'react-chartjs-2';
import HistoricChart from './HistoricChart';

const CoinPage = () => {
    const params = useParams();
    const coinId = params.id;
    const [coinData, setCoinData] = useState(null);
    const [currency, setCurrency] = useState('INR');

    const [historicalData, setHistoricalData] = useState();
    const [Days, setDays] = useState(1);
    
    
    const fetchHistoricData = async() =>{
        const {chdata} = await Axios.get(`/api/coins/${coinId}/market_chart?vs_currency=${currency}&days=${Days}`);
        console.log(chdata);
    }


    useEffect(() => {
        if (coinId) {

            Axios.get(`/api/coins/${coinId}`)
                .then((res) => {
                    console.log(res.data);
                    setCoinData(res.data);
                })
                .catch(error => {
                    console.error(error);
                    // Handle error
                });
        }
    }, [coinId]);  
    
    useEffect(() => {  
        fetchHistoricData();
    }, [coinId,currency, Days]);

    if (!coinData) {
        return <div className="loading">Loading...</div>;
    }

    const { name, symbol, image, description, market_data } = coinData;

    return (
        <div className="coin-container">
            <img src={image.large} alt={name} className="coin-image" />
            <div className="coin-details">
                <h1>{name}</h1>
                <p className="description">{parse(description.en.split(". ")[0])}</p>
                <div className="additional-info">
                    <div className="info-coins">
                        <h3>Rank:</h3>
                        <p>{coinData.market_cap_rank}</p>
                    </div>
                    <div className="info-coins">
                        <h3>Current Price: </h3>
                        <p>${market_data.current_price.usd}</p>
                    </div>
                    <div className="info-coins">
                        <h3>Market Cap:</h3>
                        <p>${market_data.market_cap.usd}</p>
                    </div>
                </div>
            </div>
           <HistoricChart {...coinData}/>
        </div>
    );
};

export default CoinPage;
