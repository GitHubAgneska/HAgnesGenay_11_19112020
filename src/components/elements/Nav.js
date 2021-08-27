import React from 'react'

export default class Nav extends React.Component {

    render() {        
            return (
                <div className='topnav-wrapper'>
                    <nav className='top-nav'>
                        <li>
                            <a className='nav-link link-home' href='/home'>Accueil</a>
                        </li>
                        <li>
                            <a className='nav-link link-about' href='/about'>A propos</a>
                        </li>
                    </nav>
                </div>
            )
    }
}

