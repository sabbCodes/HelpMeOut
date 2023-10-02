import React from 'react';
import Logo from '../assets/images/logo-light.png'

function Footer() {
    return(
        <footer>
            <div>
                <img src={Logo} alt='logo' />
            </div>
            <div className='footerSide'>
                <div className='footerSideInner'>
                    <h4>Menu</h4>
                    <p>Home</p>
                    <p>Converter</p>
                    <p>How it works</p>
                </div>
                <div className='footerSideInner'>
                    <h4>About Us</h4>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footerSideInner'>
                    <h4>Screen Record</h4>
                    <p>Browser Window</p>
                    <p>Desktop</p>
                    <p>Application</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;