import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import './BGInfo.css';

const BGInfo = (props) => {
    
    return (
        <div className='info'>
            <br></br>
            <Container>
            <h1>Tabletop Game Top Brands</h1>
            <img className='infoImage' src='https://cf.geekdo-images.com/Waerw1N-m4Gc7zZaG8p6rw__itemrep/img/KkoGnWyzcgjA2q0GPahnXXmkFSI=/fit-in/246x300/filters:strip_icc()/pic4154095.png'></img>
            <img className='infoImage' src='http://cdn.shopify.com/s/files/1/0064/9972/9490/articles/Blog_1024x.png?v=1577988032'></img>
            <img className='infoImage' src='https://boardgametoday.com/wp-content/uploads/2019/01/fantasy-flight-games-logo.jpg'></img>
            <img className='infoImage' src='https://cdn.shopify.com/s/files/1/0255/2168/4558/files/UltraPRO_Black_68d1e578-c59f-486f-a491-025627dc9078.jpg?v=1623191442'></img>
            <img className='infoImage' src='https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/tcg_product_gallery_169_en.jpg'></img>
            <img className='infoImage' src='https://www.yugioh-card.com/en/wp-content/uploads/2020/09/TCG_logo_500x500.png'></img>
            <img className='infoImage' src='https://logos-world.net/wp-content/uploads/2021/12/DnD-Symbol.png'></img>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default BGInfo
