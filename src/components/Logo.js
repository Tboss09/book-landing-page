import logo from '../images/logo-bookmark.svg';

const Logo = () => {
    return (
        <>
            <div className="header__logo">
                <a href="/">
                    <img src={logo} alt="Website Logo" />
                </a>
            </div>

        </>
    )
}

export default Logo
