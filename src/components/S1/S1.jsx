import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card, Button } from 'react-bootstrap';
import './S1.css';
import VGInfo from '../../components/VGInfo/VGInfo.jsx'
import BGInfo from '../../components/BGInfo/BGInfo.jsx'
import ColInfo from '../ColInfo/ColInfo.jsx'

class S1 extends Component {
    state = {
        // Video Games Button State:
        openVG: false,
        buttonVG: 'Show More',
        buttonColorVG: 'warning',
        // Tabletop Games Button State:
        openBG: false,
        buttonBG: 'Show More',
        buttonColorBG: 'warning',
        // Collectibles Button State:
        openCol: false,
        buttonCol: 'Show More',
        buttonColorCol: 'warning',
    }

        // Video Games Button Open/Close Function:
        toggleVG = () => {
            if (this.state.openVG == false) {
                this.setState({
                    openVG: <VGInfo />,
                    buttonVG: 'Close View',
                    buttonColorVG: 'dark',

                    openBG: false,
                    buttonBG: 'Show More',
                    buttonColorBG: 'warning',

                    openCol: false,
                    buttonCol: 'Show More',
                    buttonColorCol: 'warning',
                })
            } else if (this.state.openVG != false) {
                this.setState({
                    openVG: false,
                    buttonVG: 'Show More',
                    buttonColorVG: 'warning'
                })
            }
        }

        // Tabletop Games Button Open/Close Function:
        toggleBG = () => {
            if (this.state.openBG == false) {
                this.setState({
                    openBG: <BGInfo />,
                    buttonBG: 'Close View',
                    buttonColorBG: 'dark',

                    openVG: false,
                    buttonVG: 'Show More',
                    buttonColorVG: 'warning',
                    
                    openCol: false,
                    buttonCol: 'Show More',
                    buttonColorCol: 'warning',
                })
            } else if (this.state.openBG != false) {
                this.setState({
                    openBG: false,
                    buttonBG: 'Show More',
                    buttonColorBG: 'warning'
                })
            }
        }

        // Collectibles Button Open/Close Function:
        toggleCol = () => {
            if (this.state.openCol == false) {
                this.setState({
                    openCol: <ColInfo />,
                    buttonCol: 'Close View',
                    buttonColorCol: 'dark',

                    openVG: false,
                    buttonVG: 'Show More',
                    buttonColorVG: 'warning',

                    openBG: false,
                    buttonBG: 'Show More',
                    buttonColorBG: 'warning',
                })
            } else if (this.state.openCol != false) {
                this.setState({
                    openCol: false,
                    buttonCol: 'Show More',
                    buttonColorCol: 'warning'
                })
            }
        }

    render() {
        return (
            <div className="s1">
                <br></br>
                <Container>
                    <h2>From Games to Gunpla</h2>
                    <p className='main'>We have a large selection of retro and modern video games, tabletop games, card games, model kits, and collectibles. Stop by your friendly neighborhood game and collectibles shop today. You will never find a more complete hive of nerds and geek-ery.</p>
                    <Container>
                    <br></br>
                    <h2>Product Categories</h2>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2022/01/2b9b8-16432840438531-1920.jpg" />
                            <Card.Body>
                            <Card.Title>Video Games</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Accessories (Controllers, Headsets, Mechanical Keyboards, etc.)</ListGroup.Item>
                                <ListGroup.Item>Consoles (Fom Atari 2600 to PS5)</ListGroup.Item>
                                <ListGroup.Item>Modern Games (PS5, Switch, Series X|S, etc.)</ListGroup.Item>
                                <ListGroup.Item>Retro Games (SNES, Genesis, PS1, etc.)</ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <a href='#openSection'>
                                    <Button 
                                        variant={this.state.buttonColorVG} onClick={this.toggleVG}
                                    >
                                        {this.state.buttonVG}
                                    </Button>
                                    </a>
                                </small>
                            </Card.Footer>
                        </Card>
                        <p className='break'>-</p>
                        <Card>
                            <Card.Img variant="top" src="https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__opengraph/img/qMnbM9mmwm6SGgznxovKRhZrRn0=/fit-in/1200x630/filters:strip_icc()/pic5055631.jpg" />
                            <Card.Body>
                            <Card.Title>Tabletop Games</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Board Games</ListGroup.Item>
                                <ListGroup.Item>Collectible Card Games (MGT, Pokemon, Key Forge, etc.)</ListGroup.Item>
                                <ListGroup.Item>Roll Playing Games (D&D, Fate Core, etc.)</ListGroup.Item>
                                <ListGroup.Item>Accessories (Dice, Card Mats, Card Sleeves, etc.)</ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <a href='#openSection'>
                                    <Button 
                                        variant={this.state.buttonColorBG} onClick={this.toggleBG}
                                    >
                                        {this.state.buttonBG}
                                    </Button>
                                    </a>
                                </small>
                            </Card.Footer>
                        </Card>
                        <p className='break'>-</p>
                        <Card>
                            <Card.Img variant="top" src="https://ca.super-hobby.com/zdjecia/5/2/5/37330_rd.jpg" />
                            <Card.Body>
                            <Card.Title>Collectibles</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                            <ListGroup.Item>Figures (Legends, McFarlan, S.H Figuart)</ListGroup.Item>
                                <ListGroup.Item>Funko Pop!</ListGroup.Item>
                                <ListGroup.Item>Gunpla (Gundam Model Kits)</ListGroup.Item>
                                <ListGroup.Item>Statues (Banpresto)</ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <a href='#openSection'>
                                    <Button 
                                        variant={this.state.buttonColorCol} onClick={this.toggleCol}
                                    >
                                        {this.state.buttonCol}
                                    </Button>
                                    </a>
                                    </small>
                            </Card.Footer>
                        </Card>
                        <div id='openSection'></div>
                    </CardGroup>
                    </Container>
                </Container>
                {this.state.openVG}
                {this.state.openBG}
                {this.state.openCol}
                <br></br>
            </div>
        )
    }
}

export default S1
