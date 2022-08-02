import React from 'react';
import brandLogo from '../../images/logo.svg';
import './Navbar.css';

const Navbar = ({toggleIsNav, isNavExpanded}) => {



    return(
        <div className='navbar-container'>
            <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                <ul>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Resources</a></li>
                    <li><a>Login</a></li>
                    <li><a id='view-plans-btn'>Sign Up</a></li>                   
                </ul>
            </div>
            <div className='navbar-sub'>
                <div className='navbar-brand'>
                    <img src={brandLogo} alt='brand-logo'></img>
                </div>
                <div className='nav-menu-fs'>
                    <div className='nav-menu-fs-sub'>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Resources</a>
                        <a>Login</a>
                        <a id='view-plans-btn'><span>Sign Up</span></a>
                    </div>                
                </div>
                <div className='toggle-button'>
                    <button onClick={toggleIsNav}>
                        {isNavExpanded == true ?
                            'X' :
                            '☰'
                        }
                    </button>
                </div>
            </div>
        </div>
    )

};

export default Navbar;