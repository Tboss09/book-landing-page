import TabletImage from '../images/illustration-hero.svg'
import TabletImage2 from '../images/illustration-features-tab-2.svg'
import PeopleInTabletImage from '../images/illustration-features-tab-3.svg'


const Panel = () => {
    return (
        <>

            <div className="features__tabs" id="tabbedContent">

                <ul className="tabs">
                    <li data-target="#bookmarking" className="features__tabs--text">Simple Bookmarking</li>
                    <li data-target="#speedySearch" className="features__tabs--text">Speedy Searching</li>
                    <li data-target="#easySharing" className="features__tabs--text">Easy Sharing</li>
                </ul>

                {/* panel One */}
                <div className="panel">
                    <div className="panel__img">
                        <img src={TabletImage} alt="" />
                    </div>
                    <h1 className="panel__header">Bookmark in one click</h1>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.</p>
                    <a href="#" className="panel__link">More Info</a>
                </div>

                {/* panel Three */}
                <div className="panel">
                    <div className="panel__img">
                        <img src={TabletImage2} alt="" />
                    </div>
                    <div className="panel__text">
                        <h1 className="panel__header">Intelligent search</h1>
                        <p className="panel__description">Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.</p>
                        <a href="#" className="panel__link">More Info</a>
                    </div>

                </div>


                {/* panel Three */}
                <div className="panel">
                    <div className="panel__img">
                        <img src={PeopleInTabletImage} alt="" />
                    </div>
                    <h1 className="panel__header">Share your bookmarks</h1>

                    <p className="panel__text">
                        Easily share your bookmarks and collections with others. Create a shareable
                        link that you can send at the click of a button.
                        </p>
                    <a href="#" className="panel__link">More Info</a>
                </div>
            </div>
        </>
    )
}

export default Panel
