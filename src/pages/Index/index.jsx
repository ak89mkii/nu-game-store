import React, { Component } from 'react';
import '../../App.css';
import S1 from '../../components/S1/S1.jsx'
import S2 from '../../components/S2/S2.jsx'
import S3 from '../../components/S3/S3.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import Slides from '../../components/Slides/Slides.jsx'
import Menu from '../../components/Menu/Menu.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'

class Home extends Component {
    state = {
        open: false,
        mode: 'light',
        modeText: 'Light Mode',
        photo: 'photo',
        title: 'lightTitle',
        menu:  'ui menu',
        contact: 'contact',
        s1TitleSub: 's1TitleSub',
        s2table: 'light',
        s2TitleSub: 's2TitleSub',
        s3: 's3',
        s3TitleSub: 's3TitleSub',
        icon: sun,
        iconSize: 'iconSize',
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                modeText: 'Dark Mode',
                photo: 'photoDark',
                title: 'darkTitle',
                menu: 'ui inverted menu',
                contact: 'contactDark',
                s1TitleSub: 's1TitleSubDark',
                s2table: 'dark',
                s2TitleSub: 's2TitleSubDark',
                s3: 's3Dark',
                s3TitleSub: 's3TitleSubDark',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                modeText: 'Light Mode',
                photo: 'photo',
                title: 'lightTitle',
                menu: 'ui menu',
                contact: 'contact',
                s1TitleSub: 's1TitleSub',
                s2table: 'light',
                s2TitleSub: 's2TitleSub',
                s3: 's3',
                s3TitleSub: 's3TitleSub',
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
                    modeText={this.state.modeText}
                    toggleMode={this.toggleMode}
                    photo={this.state.photo}
                    title={this.state.title}
                    menu={this.state.menu}
                    icon={this.state.icon}
                    iconSize={this.state.iconSize}
                />
                <Slides />
                <S1 />
                <S3 
                    s3={this.state.s3}
                    s3TitleSub={this.state.s3TitleSub}
                />
                <S2 
                    s2table={this.state.s2table}
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