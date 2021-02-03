
//  REact Components
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import TabletImage from '../images/illustration-features-tab-1.svg'
import TabletImage2 from '../images/illustration-features-tab-2.svg'
import PeopleInTabletImage from '../images/illustration-features-tab-3.svg'


const Panel = () => {
    return (
        <>

            <div className="features__tabs" id="tabbedContent">

                <ul className="tabs">
                    <li data-target="#bookmarking" className="features__tabs--text">Simple Bookmarking <div className="line"></div></li>
                    <li data-target="#speedySearch" className="features__tabs--text">Speedy Searching <div className="line"></div></li>
                    <li data-target="#easySharing" className="features__tabs--text">Easy Sharing <div className="line"></div></li>

                </ul>



                {/* panel One */}
                <div className="panels">
                    <div className="panel active" id="bookmarking">
                        <div className="panel__img">
                            <img src={TabletImage} alt={`${TabletImage} img`} />
                        </div>

                        <div className="panel__text">
                            <h1 className="panel__text--header">Bookmark in one click</h1>
                            <p className="panel__text--desc">Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.</p>
                            <a href="#" className="panel__text--link">More Info</a>
                        </div>

                    </div>

                    {/* panel Three */}
                    <div className="panel" id="speedySearch">
                        <div className="panel__img">
                            <img src={TabletImage2} alt="" />
                        </div>

                        <div className="panel__text">
                            <h1 className="panel__text--header">Intelligent search</h1>
                            <p className="panel__text--desc">Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.</p>
                            <a href="#" className="panel__text--link">More Info</a>
                        </div>

                    </div>


                    {/* panel Three */}
                    <div className="panel" id="easySharing">
                        <div className="panel__img">
                            <img src={PeopleInTabletImage} alt="" />
                        </div>

                        <div className="panel__text">

                            <h1 className="panel__text--header">Share your bookmarks</h1>
                            <p className="panel__text--desc">
                                Easily share your bookmarks and collections with others. Create a shareable
                                link that you can send at the click of a button.
                        </p>
                            <a href="#" className="panel__text--link">More Info</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main__download download">
                <h1 className=" download__header">Download the Extension</h1>

                <p className="download__title">
                    We've got more browsers in the pipeline.
                    Please do let us know if you've got a favourite
                    you'd like us to prioritize
                </p>

            </div>

        </>
    )
}

export default Panel
