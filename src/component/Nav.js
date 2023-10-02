import React from 'react';
import Logo from '../assets/images/logo.png'

function Nav() {

    return(
        <nav className='navigation'>
            <div className='navLeft'>
                <img src={Logo} alt='HelpMeOut logo' />
            </div>
            <div className='navMiddle'>
                <h4>Features</h4>
                <h4>How It Works</h4>
            </div>
            <div>
                <h4>Get Started</h4>
            </div>
        </nav>
    )
}

export default Nav;