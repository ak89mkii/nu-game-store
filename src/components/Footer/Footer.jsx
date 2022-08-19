import React, { Component } from 'react';
import '../../App.css';

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
            <div className='contacts'>
                <hr class="bg-warning border-2 border-top border-warning" />
                <div className='contacts'>
                    Copyright &#169; Nu Game Store 2022
                </div>
                <br></br>
            </div>
        )
    }
}

export default Footer