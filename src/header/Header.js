import React, { Component } from 'react';
import './Header.css';
import Logo from './images/logo.png';

class Header extends Component {

    render() {

        return(
            <div>
                <img src={Logo} alt='PNH Code Logo' className='imgLogo' />
            </div>
        )
    }
}

export default Header;