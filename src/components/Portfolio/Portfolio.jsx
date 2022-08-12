import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './Portfolio.css';
import Collect from './img/collect.png';
import Gunpla from './img/gunpla.png';
import Sega from './img/sega.png';
import Tabletop from './img/tabletop.png';
import Systems from './img/systems.png';

class Slides extends Component {
    state = {

    }

    render() {
        return (
            <div id='portfolio' className="portfolio">
                <br></br>
                <Container>
                <h2 className='main2'>"You will never find a more complete hive of nerds and geek-ery."</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Gunpla}
                            alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Collect}
                            alt="Second slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Sega}
                            alt="Third slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Tabletop}
                            />
                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Systems}
                            />
                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <br></br>
            </div>
        )
    }
}

export default Slides