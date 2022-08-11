import React, { Component } from 'react';
import { Segment, Grid, Icon, Item } from 'semantic-ui-react'
import '../../App.css';
import Menu from '../../components/Menu/Menu.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import Footer from '../../components/Footer/Footer.jsx'

class Options extends Component {
    state = {
        open: false,
        mode: 'light',
        photo: 'photo',
        nav: 'nav',
        menu:  'ui menu'
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                photo: 'photoDark',
                nav: 'navDark',
                menu: 'ui inverted menu'
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                photo: 'photo',
                nav: 'nav',
                menu: 'ui menu'
            })
        }
    }

    render() {

        return (
            <div>
                <Menu
                    open={this.state.false}
                    mode={this.state.mode}
                    toggleMode={this.toggleMode}
                    photo={this.state.photo}
                    nav={this.state.nav}
                    menu={this.state.menu}
                />
                <br></br>
                <br></br>
                <Grid centered>
                    <Grid.Row>
                        <h1 className="title">Ponder Code</h1>
                    </Grid.Row>
                    <Grid.Row>
                        <h2 className="titleSub">Example Build Options</h2>
                    </Grid.Row>
                </Grid>
                <br></br>
                <br></br>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Options