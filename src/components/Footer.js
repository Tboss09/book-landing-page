import logo from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
// import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={logo} alt="" />
            </div>

            <div className="footer__links">
                <ul className="links">
                    <li>
                        <a href="#" className="link">Features</a>
                    </li>

                    <li>
                        <a href="#" className="link">Pricing</a>
                    </li>

                    <li>
                        <a href="#" className="link">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="footer__icons">
                
                <div className="footer__icons--facebook">
                    <img src={facebook} alt="facebook Icon" />
                </div>
                

                <div className="footer__icons--facebook">
                    <img src={twitter} alt="twitter Icon" />
                </div>

            </div>
        </footer>
    )
}

export default Footer
