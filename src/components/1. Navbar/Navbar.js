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
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Resources</a>
                        <a>Login</a>
                        <a>Sign Up</a>
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
                        <a>Resources</a>
                        <a id='login-right'>Login</a>
                        <a>Sign Up</a>
                    </div>                
                </div>
            </div>
        </div>
    )

};

export default Navbar;