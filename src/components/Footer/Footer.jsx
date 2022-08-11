import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import The404Button from '../404Button/404Button.jsx'

class Footer extends Component {
    state = {
        value: 'code@pondermint.com',
        copied: false,
        open: false
    }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        return (
            <div>
            </div>
        )
    }
}

export default Footer