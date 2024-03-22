import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

import ReactImg from '../assets/pic.avif';
import Bitcoin from '../assets/bitcoin.avif';
import ETH from '../assets/eth.avif';
import Solana from '../assets/solana.avif';
import { Card, CardGroup } from 'react-bootstrap';


function Cards() {
  return (
            <CardGroup className="container">
            <Card className="card" >
                <Card.Img variant="top" src={Bitcoin} />
                <Card.Body>
                <Card.Title className="card-title">Bitcoin (BTC)</Card.Title>
                <Card.Text className="card-text">
                The original cryptocurrency and the king of digital assets.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={ETH} />
                <Card.Body>
                <Card.Title className="card-title">Ethereum (ETH)</Card.Title>
                <Card.Text className="card-text">
                The leading blockchain platform for decentralized applications (DApps) and smart contracts.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={Solana} />
                <Card.Body>
                <Card.Title className="card-title">Solana (SOL)</Card.Title>
                <Card.Text className="card-text">
                A high-performance blockchain platform designed for decentralized applications and crypto innovation.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
  );
}



export default function Content() {
    return (
        <div className='c-main'>
            <div className='one c'>
                <h2>Welcome to BitProphecy - Your Gateway to the World of Cryptocurrency!</h2>
                <p>Discover, Analyze, and Stay Ahead in the Dynamic Crypto Market.</p>
                <Link to='/register' className="register">Register</Link>
            </div>

            <h2 className='sub-heading'>Welcome to Investing World</h2>

            <Cards />

            <div className='three c'>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic</h2>
                <p>Discover, Analyze, and Stay Ahead in the Dynamic Crypto Market.</p>
                <Link to='/login' className="login register">Login</Link>
            </div>
        </div>
    )
}
