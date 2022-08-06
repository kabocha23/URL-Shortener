import React from 'react';
import brandLogo from '../../images/logo.svg';
import './Navbar.css';

const Navbar = ({toggleIsNav, isNavExpanded}) => {


    return(
        <div className='navbar-container'>
            <div className='navbar-sub'>
                <div className='navbar-brand'>
                    <img src={brandLogo}></img>
                </div>
                <div className='toggle-button'>
                    <button 
                        onClick={toggleIsNav} 
                        className={isNavExpanded 
                            ? 'toggle-button-btn expanded' 
                            : 'toggle-button-btn'
                        }
                    >
                        {isNavExpanded == true ?
                            'X' :
                            '☰'
                        }
                    </button>
                </div>
                <div 
                    className={isNavExpanded 
                        ? 'nav-menu-coll expanded' 
                        : 'nav-menu-coll'
                    }
                >
                    <div className='nav-menu-items-coll'>
                        <a className='nvic'>Features</a>
                        <a className='nvic'>Pricing</a>
                        <a className='nvic'>Resources</a>
                        <hr></hr>
                        <a className='nvic'>Login</a>
                        <button className='sign-up-btn'><a>Sign Up</a></button>
                    </div>                
                </div>
                <div className={isNavExpanded 
                        ? 'overlay' 
                        : 'no-overlay'
                }></div>
                <div className='nav-menu'>
                    <div className='nav-menu-items'>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a id='resources-left'>Resources</a>
                        <a id='login-right'>Login</a>
                        <button className='sign-up-btn'><a>Sign Up</a></button>
                    </div>                
                </div>
            </div>
        </div>
    )

};

export default Navbar;