import logo from '../images/logo-bookmark.svg';
import hamBurger from '../images/icon-hamburger.svg';

const Header = () => {
    return (
        <header className>
            <div className="header">
                <div className="header__logo">
                    <a href="/">
                    <img src={logo} alt="" />
                    </a>
                </div>

                <div className="header__nav">
                    <img src={hamBurger} alt="nav menu" />
                </div>
            </div>
        </header>
    )
}

export default Header
