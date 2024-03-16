import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

import ReactImg from '../assets/pic.avif';

import { Card, CardGroup } from 'react-bootstrap';


function Cards() {
  return (
            <CardGroup className="container">
            <Card className="card" >
                <Card.Img variant="top" src={ReactImg} />
                <Card.Body>
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card-text">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={ReactImg} />
                <Card.Body>
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card" >
                <Card.Img variant="top" src={ReactImg} />
                <Card.Body>
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card-text">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
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
                <h2>Lorem ipsum is placeholder text commonly used in the graphic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link to='/register' className="register">Register</Link>
            </div>

            <h2 className='sub-heading'>Welcome to Investing World</h2>

            <Cards />

            <div className='three c'>
                <h2>Lorem ipsum is placeholder text commonly used in the graphic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link to='/login' className="login register">Login</Link>
            </div>
        </div>
    )
}
