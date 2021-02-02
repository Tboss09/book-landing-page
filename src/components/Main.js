import Title from './Title'
import MainHeader from './MainHeader'
import Features from './Features'
import Download from './Download'
import Question from './Question'
import StayUpdated from './StayUpdated'
import Panel from './Panel'

// Browser Images
import chromeLogo from '../images/logo-chrome.svg'
import firefoxLogo from '../images/logo-firefox.svg'
import operaLogo from '../images/logo-opera.svg'

const Main = () => {
    return (
        <main className="main">
            {/* Main Section */}
            <MainHeader />
            <Title />
            <Features />

            <Panel />
            <div className="install">
                <Download browser="Chrome" logo={chromeLogo} version="62" />
                <Download browser="FireFox" logo={firefoxLogo} version="55" />
                <Download browser="Opera" logo={operaLogo} version="46" />
            </div>

            <Question />
            <StayUpdated />

        </main>
    )
}

export default Main
