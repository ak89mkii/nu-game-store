import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import './Contact.css';

const Contact = (props) => {

    return (
        <div className={props.s3}>
        {/* <div className='contacts'> */}
            <br></br>
            <Container>
                <h2>Hours & Contact Info</h2>
                {/* <p className={props.s3TitleSub}></p> */}
                <Container>
                    <CardGroup className='s3TitleSub'>
                        
                        <Card> 
                            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=google,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            
                            <Card.Footer>
                            <small className="text-muted"><h1>Address:</h1><p>117 Echo Base</p><p>Hoth Planet, Hoth System 00343</p></small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Body>
                            <Card.Title><h1>Contact Info:</h1></Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Email</b>: echo3@echobase.com</ListGroup.Item>
                                <ListGroup.Item><b>Phone</b>: (588) 117-5334</ListGroup.Item>
                            </ListGroup>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card.Body>
                            <Card.Title><h1>Hours of Operation:</h1></Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Sunday</b>: Closed</ListGroup.Item>
                                <ListGroup.Item><b>Monday</b>: 9:00am - 10:30pm</ListGroup.Item>
                                <ListGroup.Item><b>Tuesday</b>: 9:00am - 10:30pm</ListGroup.Item>
                                <ListGroup.Item><b>Wednesday</b>: 9:00am - 10:30pm</ListGroup.Item>
                                <ListGroup.Item><b>Thursday</b>: 9:00am - 10:30pm</ListGroup.Item>
                                <ListGroup.Item><b>Friday</b>: 9:00am - 11:30pm</ListGroup.Item>
                                <ListGroup.Item><b>Saturday</b>: 9:00am - 11:30pm</ListGroup.Item>
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