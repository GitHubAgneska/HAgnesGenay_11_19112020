import React, { Component } from 'react'
import Nav from '../elements/Nav'
import  logo from '../../assets/logos/logo.png'
// import '../../styles/layout/_header.scss';


export class Header extends Component {
    render() {
        return (
            <div id="header-wrapper" className="header-wrapper">
                <header id="header" class="header" role="banner">
                    <div id="header__logo-wrapper" class="header__logo-wrapper" tabindex="0">
                        <a href="#home" aria-label="Kasa Home page"><img src={logo} alt="logo" className="main-logo"/></a>
                    </div>
                    <div className="nav-wrapper">
                        <Nav />
                    </div>
                </header>
            </div>
        )
    }
}

export default Header