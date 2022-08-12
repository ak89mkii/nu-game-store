import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../App.css';

const Contact = (props) => {

    return (
        // <div id='contact' className={props.s2}>
        <div className='contacts'>
            <br></br>
            <Container>
                <h2>Hours & Contact Info</h2>
                <p className={props.s2TitleSub}></p>
                <Container>
                    <CardGroup>
                        
                        <Card> 

                            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=google,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            
                            <Card.Footer>
                            <small className="text-muted"><h1>Address:</h1><p>117 Echo Base</p><p>Hoth Planet, Hoth System 00343</p></small>
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>Contact Info:</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Email: </ListGroup.Item>
                                <ListGroup.Item>Phone:</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>Hours of Operation:</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Sunday</b>: Closed</ListGroup.Item>
                                <ListGroup.Item><b>Monday</b>: 9:00am - 10:30pm</ListGroup.Item>
                                <ListGroup.Item>Tuesday: </ListGroup.Item>
                                <ListGroup.Item>Monday:</ListGroup.Item>
                                <ListGroup.Item>Sunday: </ListGroup.Item>
                                <ListGroup.Item>Monday:</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact