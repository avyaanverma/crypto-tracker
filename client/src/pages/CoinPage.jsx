import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Axios from 'axios';
import './CoinPage.css'; // Import CSS file for styling

const CoinPage = () => {
    const params = useParams();
    const coinId = params.id;
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        if (coinId) {
            Axios.get(`/api/coins/${coinId}`)
                .then((res) => {
                    setCoinData(res.data);
                })
                .catch(error => {
                    console.error(error);
                    // Handle error
                });
        }
    }, [coinId]);   

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
                    <p>Rank: {coinData.coingecko_rank}</p>
                    <p>Current Price: ${market_data.current_price.usd}</p>
                    <p>Market Cap: ${market_data.market_cap.usd}</p>
                </div>
            </div>
        </div>
    );
};

export default CoinPage;
