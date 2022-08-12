import React, { Component } from 'react';
import '../../App.css';
import S1 from '../../components/S1/S1.jsx'
import S2 from '../../components/S2/S2.jsx'
import S3 from '../../components/S3/S3.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import Portfolio from '../../components/Portfolio/Portfolio.jsx'
import Menu from '../../components/Menu/Menu.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'

class Home extends Component {
    state = {
        open: false,
        mode: 'light',
        photo: 'photo',
        title: 'lightTitle',
        menu:  'ui menu',
        contact: 'contact',
        s1TitleSub: 's1TitleSub',
        s2: 's2',
        s2TitleSub: 's2TitleSub',
        icon: sun,
        iconSize: 'iconSize',
        // categories: <S1 />,
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                photo: 'photoDark',
                title: 'darkTitle',
                menu: 'ui inverted menu',
                contact: 'contactDark',
                s1TitleSub: 's1TitleSubDark',
                s2: 's2Dark',
                s2TitleSub: 's2TitleSubDark',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                photo: 'photo',
                title: 'lightTitle',
                menu: 'ui menu',
                contact: 'contact',
                s1TitleSub: 's1TitleSub',
                s2: 's2',
                s2TitleSub: 's2TitleSub',
                icon: sun,
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
                    title={this.state.title}
                    menu={this.state.menu}
                    icon={this.state.icon}
                    iconSize={this.state.iconSize}
                />
                <Portfolio />
                <S1 />
                <S3 
                    s2={this.state.s2}
                    s2TitleSub={this.state.s2TitleSub}
                />
                <S2 
                    s2={this.state.s2}
                    s2TitleSub={this.state.s2TitleSub}
                />
                <Contact
                    s2={this.state.s2}
                    s2TitleSub={this.state.s2TitleSub}
                />
            </div>
        )
    }
}

export default Home