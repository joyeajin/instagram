import React from 'react';
import './css/index.css';

const Header = () => {
    return (
        <div className='header'> {/* 주석 : alt + shift + a */}
            <div className='wrapper'>
                <h1 className='logo'>instagram</h1>
                <nav className='navigation'>
                    <ul className='nav-wrapper'>
                        <li className='nav'>
                            <img src="/assets/header/feed-dac.svg" alt="" />
                        </li>
                        <li className='nav'>
                            <img src="/assets/header/profile-dac.svg" alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;