import hamBurger from '../images/icon-hamburger.svg';
import logo from '../images/logo-bookmark.svg';
import closeIcon from '../images/icon-close.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';



const Nav = () => {
    return (
        <>
            <div className="header__nav">
                <nav>
                    <img src={hamBurger} alt="nav menu" />

                    <div className="nav">
                        <div className="nav__header">

                            {/* nav Logo */}
                            <div className="nav__header--logo">
                                <img src={logo} alt={logo} />
                            </div>


                            {/* Close Icon */}
                            <div className="nav__header--close">
                                <img src={closeIcon} alt={closeIcon} />
                            </div>


                        </div>

                        <div className="nav__links">
                            <ul className="links">
                                <li>
                                    <a href="#">Features</a>
                                </li>

                                <li>
                                    <a href="#">Pricing</a>
                                </li>

                                <li>
                                    <a href="#">Contact</a>
                                </li>

                                <li>
                                    <a href="#">Login</a>
                                </li>

                            </ul>
                        </div>

                        <div className="nav__icons">
                            <div className="nav__icons--facebook">
                                <img src={facebookIcon} alt="" />
                            </div>

                            <div className="nav__icons--twitter">
                                <img src={twitterIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Nav
