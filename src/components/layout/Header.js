import React, { Component } from 'react'
// import Nav from '../elements/Nav'
import  logo from '../../assets/logos/kasa-logo.png'


export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='logo' className='main-logo'/>
            </div>
        )
    }
}