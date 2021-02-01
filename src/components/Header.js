import Nav from "./Nav";
import Logo from "./Logo";
const Header = () => {
    return (
        <header>
            <div className="header">
                <Logo />
                <Nav />
            </div>
        </header>
    )
}

export default Header
