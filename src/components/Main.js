import Title from './Title'
import MainHeader from './MainHeader'
import Features from './Features'
import Download from './Download'

// Browser Images
import chromeLogo from '../images/logo-chrome.svg'
import firefoxLogo from '../images/logo-firefox.svg'
import operaLogo from '../images/logo-opera.svg'

const Main = () => {
    return (
        <main className="main">
            {/* Main Section */}
            <Title />
            <MainHeader />
            <Features />
            <div className="download">
                <Download browser="chrome" logo={chromeLogo} version="62" />
                <Download browser="fireFox" logo={firefoxLogo} version="55" />
                <Download browser="opera" logo={operaLogo} version="46" />
            </div>

        </main>
    )
}

export default Main
