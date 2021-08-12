import React, { Component } from 'react'
// import '../../styles/layout/_nav.scss'  // <= ! err if imported

export class Nav extends Component {
    render() {
        return (
            <div className='topnav-wrapper'>
                <nav className='top-nav'>
                    <li>
                        <a className='nav-link link-home' href='#home'>Accueil</a>
                    </li>
                    <li>
                        <a className='nav-link link-about' href='#about'>A propos</a>
                    </li>
                </nav>
            </div>
        )
    }
}

export default Nav