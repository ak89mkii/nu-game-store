import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import  Form from 'react-bootstrap/Form';
import '../../App.css';
import Logo from '../../img/nulogo.png'

const Header = (props) => {
    
    return (
        <div className={props.mode}>
            <br></br>
            <Container>
            <h1 className={props.title}><img className='title' src={Logo}></img>Nu Game Store</h1>
            <h4>Video Games, Tabletop Games, Cards, Models & More</h4>
            <Form>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label={props.modeText}
                    onClick={props.toggleMode}
                />
            </Form>
            </Container>
            <hr class="bg-warning border-2 border-top border-warning" />
        </div>
    )
}

export default Header