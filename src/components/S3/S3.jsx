import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton.jsx'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from 'react-bootstrap';
import '../../App.css';
import Portfolio from '../Slides/Slides.jsx'


class S3 extends Component {
    state = {
        // Subscribe Button:
        open: false
    }

    render() {
        // Subscribe Button:
        const { open } = this.state
        return (
            <div className="s2">
                <br></br>
                <Container>
                    <h2>We Buy Used Video Games</h2>
                    <p className='s2TitleSub'>We have a large selection of retro and modern video games, tabletop games, card games, model kits, and collectibles. Stop by your friendly neighborhood game and collectibles shop today. You will never find a more complete hive of nerds and geek-ery.</p>
                </Container>
                <br></br>
            </div>
        )
    }
}

export default S3
