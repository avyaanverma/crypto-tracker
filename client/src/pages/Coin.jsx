import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import './Coin.css'
import { SingleCoin } from "../config/api";


const Coin = ({id, name, image, symbol, marketcap, price, pricechange, volume}) => {
   

    return (
        <div className="coin-container" key={id}>
            {/* <div className="coin-row"> */}
            <Link to={`/coins/${id}`} className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{price }</p>
                    <p className="coin-volume">₹{ volume ? volume.toLocaleString() : 'NA'}</p>
                    {pricechange < 0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt Cap: ₹{marketcap ? marketcap.toLocaleString() : 'NA'}
                    </p>
                </div>
            {/* </div> */}
            </Link>
        </div>
    )
}
export default Coin