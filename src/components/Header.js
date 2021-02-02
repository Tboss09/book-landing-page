import Nav from "./Nav";
import Logo from "./Logo";
const Header = ({ onToggleMenu }) => {
    return (
        <header>
            <div className="header">
                <Logo />
                <Nav onToggleMenu={onToggleMenu} />
            </div>
        </header>
    )
}

export default Header
