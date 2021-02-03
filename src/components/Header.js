import Nav from "./Nav";
import Logo from "./Logo";
const Header = ({ onToggleMenu }) => {
    return (
        <header>
            <div className="header">
                <Logo />
                <Nav onToggle={onToggleMenu} />
            </div>
        </header>
    )
}

export default Header
