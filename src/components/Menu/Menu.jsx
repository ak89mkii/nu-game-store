import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import  Form from 'react-bootstrap/Form';
import '../../App.css';
import Logo from '../../img/nulogo.png'

const Menu = (props) => {
    
    return (
        <div className={props.mode}>
            <br></br>
            <Container>
            <div className={props.title}><img className='titleImage {
' src={Logo}></img>Nu Game Store</div>
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

export default Menu