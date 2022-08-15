import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton.jsx'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from 'react-bootstrap';
import './ColInfo.css';
import Sega from './img/sega.png'


const ColInfo = (props) => {
    
    return (
        <div className='info'>
            <br></br>
            <Container>
            <h1 className='infoTitleCol'>Collectibles Top Brands</h1>
            <img className='infoImage' src='https://i5.walmartimages.com/dfw/4ff9c6c9-79db/k2-_494546fa-37fb-4b4e-9e82-26b7ce0c0658.v1.jpg'></img>
            <img className='infoImage' src='https://upload.wikimedia.org/wikipedia/commons/1/1c/Gunpla_Logo.svg'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Xbox/Xbox-Logo.wine.png'></img>
            <img className='infoImage' src={Sega}></img>
            <img className='infoImage' src='https://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17532.png'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default ColInfo
