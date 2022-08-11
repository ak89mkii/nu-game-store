import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

let choices = ['goku', 'spock', 'winston', 'darth', 'masterchief', 'gondor', 'halo', 'charmander', 'data']
let num = Math.floor(Math.random() * choices.length)

class The404Button extends Component {
    state = {
        random: choices[num],
    }

    randomChoice = () => {
        let newNum = Math.floor(Math.random() * choices.length)
        this.setState({
            random: choices[newNum]
        })
    }

    render() {
        // Button:
        return (
            <div className="S0">
                <button className='button404' onClick={this.randomChoice}>
                <Link to={this.state.random}>
                    <h2 className="text404">404</h2>
                </Link>
                </button>
            </div>
        )
    }
}

export default The404Button;