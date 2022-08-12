import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton.jsx'
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Card } from 'react-bootstrap';
import '../../App.css';
import Portfolio from '../../components/Portfolio/Portfolio.jsx'


class S1 extends Component {
    state = {
        // Subscribe Button:
        open: false
    }

    render() {
        // Subscribe Button:
        const { open } = this.state
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
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
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
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <large className="text-muted">More</large>
                            </Card.Footer>
                        </Card>
                        <p className='break'>-</p>
                        <Card>
                            <Card.Img variant="top" src="https://ca.super-hobby.com/zdjecia/5/2/5/37330_rd.jpg" />
                            <Card.Body>
                            <Card.Title>Collectibles</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    </Container>
                </Container>
                <br></br>
            </div>
        )
    }
}

export default S1
