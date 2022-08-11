import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'

class Error404 extends Component {
    state = {
        open: false,
        mode: 'light',
        photo: 'photo',
        nav: 'nav',
        menu:  'ui menu',
        contact: 'contact',
        s1TitleSub: 's1TitleSub',
        s2: 's2',
        s2TitleSub: 's2TitleSub',
        icon: sun,
        iconSize: 'iconSize'
    }
  
    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                photo: 'photoDark',
                nav: 'navDark',
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
                nav: 'nav',
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
            </div>
        )
    }
}

export default Error404;