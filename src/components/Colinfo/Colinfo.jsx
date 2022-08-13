import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton.jsx'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from 'react-bootstrap';
import './Colinfo.css';
import Sega from './img/sega.png'


const Colinfo = (props) => {
    
    return (
        <div className='info'>
            <br></br>
            <Container>
            <h1>Video Game Top Brands</h1>
            <img className='infoImage' src={Sega}></img>
            <img className='infoImage' src='https://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17532.png'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Xbox/Xbox-Logo.wine.png'></img>
            <img className='infoImage' src={Sega}></img>
            <img className='infoImage' src='https://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17532.png'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Xbox/Xbox-Logo.wine.png'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Xbox/Xbox-Logo.wine.png'></img>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default Colinfo
