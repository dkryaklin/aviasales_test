import React from 'react';

import aviasalesLogo from '../images/aviasales_logo.png';

import '../css/header.css';

const Header = () => {
    return (
        <header className="header">
            <img className="header_logo" alt="" src={aviasalesLogo} />
        </header>
    )
}

export default Header;
