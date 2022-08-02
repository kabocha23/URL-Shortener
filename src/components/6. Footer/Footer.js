import React from 'react';
import brandLogo from '../../images/logo.svg';
import FbIcon from '../../images/icon-facebook.svg'
import TwIcon from '../../images/icon-twitter.svg'
import PiIcon from '../../images/icon-pinterest.svg'
import IgIcon from '../../images/icon-instagram.svg'
import './Footer.css';

const Footer = () => {


    return(
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-header'>
                    <div className='footer-header-brand'>
                        <img src={brandLogo} alt='footer-brand-logo'/>
                    </div>
                </div>
                <div className='footer-body'>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>Features</a></li>
                            <li><a>Link Shortening</a></li>
                            <li><a>Branded Links</a></li>
                            <li><a>Analytics</a></li>                       
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>Resources</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Developers</a></li>
                            <li><a>Support</a></li>
                        </ul>
                    </div>
                    <div className='footer-body-sub'>
                        <ul>
                            <li className='foot-sub-head'><a>Company</a></li>
                            <li><a>About</a></li>
                            <li><a>Our Team</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-contacts'>
                    <a><img src={FbIcon} alt='facebook-icon'/></a>
                    <a><img src={TwIcon} alt='twitter-icon'/></a>
                    <a><img src={PiIcon} alt='pinterest-icon'/></a>
                    <a><img src={IgIcon} alt='instagram-icon'/></a>
                </div>
            </div>
        </div>
    )

};

export default Footer;