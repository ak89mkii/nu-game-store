import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card, Button } from 'react-bootstrap';
import './S1.css';
import VGInfo from '../../components/VGInfo/VGInfo.jsx'
// import VGInfo from '../../components/S2/S2.jsx'
// import VGInfo from '../../components/S2/S2.jsx'

class S1 extends Component {
    state = {
        // Show More Button:
        openVG: false,
        buttonVG: 'Show More',
        buttonColorVG: 'warning',
        openBG: false,
        openCol: false
    }

    toggleVG = () => {
        if (this.state.openVG == false) {
            this.setState({
                openVG: <VGInfo />,
                buttonVG: 'Close View',
                buttonColorVG: 'dark'
            })
        } else if (this.state.openVG != false) {
            this.setState({
                openVG: false,
                buttonVG: 'Show More',
                buttonColorVG: 'warning'
            })
        }
    }

    render() {
        // Show More Button:
        const { openVG } = this.state
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
                                    <Button variant={this.state.buttonColorVG} onClick={this.toggleVG}>{this.state.buttonVG}</Button>
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
                                    <Button variant="warning">Show More</Button>
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
                                    <Button variant="warning">Show More</Button>
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    </Container>
                </Container>
                {this.state.openVG}
                <br></br>
            </div>
        )
    }
}

export default S1
