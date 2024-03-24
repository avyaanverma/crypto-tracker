import React,{useState} from 'react'
// import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './CoinPage.css'
// import  CoinDetail from './Coin';

const CoinPage = ({id, name, image, symbol, marketcap, price, pricechange, volume}) => {

    // const {id}=useParams();
    const {coin,setCoin}=useState();
    // const {currency,symbol}=CoinDetail();
    

    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={image} alt={name+"Image"} />
            </div>
            <ul className="coinInfo">
                <li><b>Market Cap:</b> $ {marketcap}</li>
                <li><b>Price:</b> ${price}</li>
                <li style={{color:(pricechange>=0?"green":"red")}} ><b>Change 24H:</b> {pricechange}</li>
            </ul>
        </div>
    )
}
export default CoinPage