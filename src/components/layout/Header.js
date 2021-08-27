import Nav from '../elements/Nav'
import  logo from '../../assets/logos/logo.png'


const Header =() => {

        return (
            <div id="header-wrapper" className="header-wrapper">
                <header id="header" className="header" role="banner">
                    <div id="header__logo-wrapper" className="header__logo-wrapper" tabIndex="0">
                        <a href="/home" aria-label="Kasa Home page"><img src={logo} alt="logo" className="main-logo"/></a>
                    </div>
                    <div className="nav-wrapper">
                        <Nav />
                    </div>
                </header>
            </div>
        )
}

export default Header