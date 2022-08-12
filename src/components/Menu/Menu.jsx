import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import  Form from 'react-bootstrap/Form';
import { Divider } from 'react-bootstrap';
import '../../App.css';
import Main from '../../img/01.png'

const Header = (props) => {
    
    return (
        <div className={props.mode}>
            <Container>
            <h1 className={props.title}>Nu Game Store</h1>
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