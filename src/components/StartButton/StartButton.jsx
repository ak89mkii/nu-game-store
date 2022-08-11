import React, { Component } from 'react';
import '../../App.css';

const square = { width: 175, height: 175 }

class StartButton extends Component {
    state = {
        // Subscribe Button:
        open: false
    }

    // Subscribe Button: Functions
    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render() {
        // Button:
        const { open } = this.state
        return (
            <div className="S0">
                <button className='buttonStart' onClick={this.handleClick}>
                <a href='#contact'>
                    <h2 className="blink">PRESS START</h2>
                </a>
                </button>
                
                <p>(to contact us)</p>
            </div>
        )
    }
}

export default StartButton