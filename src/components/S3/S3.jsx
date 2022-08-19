import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import './S3.css';
import trade from './img/trade.png'

const S3 = (props) => {
    return (
        <div className={props.s3}>
            <br></br>
            <Container>
                <h2>We Buy Used Video Games</h2>
                <p className={props.s3TitleSub}>From retro Nintendo 64 collections to nearly new Series X games, we are interested in considering trade-ins from any era. Bring in your what don't mind parting with and there is a good chance that we will be interested in giving you an offer that you CAN, but may not want to refuse.</p>
                <Card bg='primary' style={{ width: '18rem' }}>
                    <img src={trade}></img>
                </Card>
            </Container>
            <br></br>
        </div>
            
        )
 }

export default S3
