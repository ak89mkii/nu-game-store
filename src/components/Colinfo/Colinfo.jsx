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
            <img className='infoImage' src='https://www.tamashiinations.com/product_detail/jujutsukaisen/images/shf/logo.png'></img>
            <img className='infoImage' src='https://download.logo.wine/logo/Banpresto/Banpresto-Logo.wine.png'></img>
            <img className='infoImage' src='https://upload.wikimedia.org/wikipedia/commons/0/0f/BANDAI_logo.png'></img>
            <img className='infoImage' src='https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/ATVPDKIKX0DER/e7b913722297c221d59a2c42a43e6786.w1500.h1500.jpg'></img>
            <img className='infoImage' src='https://static-asset-delivery.hasbroapps.com/d4d8ccc5d7283c12117ccb3db9024ed79cdf4fef/c179aaf234bd3269b6abbec1279f426c.png'></img>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default ColInfo
