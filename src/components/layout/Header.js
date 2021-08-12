import React, { Component } from 'react'
import Nav from '../elements/Nav'
import  logo from '../../assets/logos/logo.png'
import '../../styles/layout/_header.scss';


export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='logo' className='main-logo'/>
                <div className='nav-wrapper'>
                    <Nav />
                </div>
            </div>
        )
    }
}

export default Header