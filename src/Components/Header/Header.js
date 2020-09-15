import React from 'react';
import logo from './Images/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './Images/bannerbackground.png'

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <img className="logo" src={logo} alt="logo" />
                <div>

                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <img className="backgroundImage" src={backgroundImage} alt="" />
            
        </div>
    );
};

export default Header;