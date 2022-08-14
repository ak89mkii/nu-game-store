import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton.jsx'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from 'react-bootstrap';
import './VGInfo.css';
import Sega from './img/sega.png'


const VGInfo = (props) => {
    
    return (
        <div className='info'>
            <br></br>
            <Container>
            <h1 className='infoTitle'>Video Game Top Brands</h1>
            <img className='infoImage' src={Sega}></img>
            <img className='infoImage' src='https://pngimg.com/uploads/sony_playstation/sony_playstation_PNG17532.png'></img>
            <img className='infoImage' src='https://progressbar.com.au/wp-content/uploads/2017/06/Nintendo-Banner.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Xbox/Xbox-Logo.wine.png'></img>
            <img className='infoImage' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1501533252/wa2tgvekdjm7aa8qrhv8.png'></img>
            <img className='infoImage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Activision-blizzard_logo_Black.svg/1200px-Activision-blizzard_logo_Black.svg.png'></img>
            <img className='infoImage' src='https://i.ytimg.com/vi/F7GTpD_kkWQ/hqdefault.jpg'></img>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default VGInfo
