import { Component } from 'react';
import  logo_white  from '../../assets/logos/logo_white.png'


export class Footer extends Component {
    render() {
        return(
            <div className="footer-wrapper">
                <footer id="footer" class="footer" role="contentinfo">
                    <div id="footer__logo-wrapper" class="footer__logo-wrapper" tabindex="0">
                        <a href="#home" aria-label="Kasa Home page"><img src={logo_white} alt="logo" className="main-logo"/></a>
                    </div>
                    <div className="footer__credentials">
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer