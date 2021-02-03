
//  REact Components
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import TabletImage from '../images/illustration-features-tab-1.svg'
import TabletImage2 from '../images/illustration-features-tab-2.svg'
import PeopleInTabletImage from '../images/illustration-features-tab-3.svg'


const Panel = () => {
    return (
        <>
            <Tabs className="features__tabs">
                <TabList className="react__tabs">
                    <Tab className="react__tabs--tab">Simple Bookmarking</Tab>
                    <Tab className="react__tabs--tab">Speedy Searching</Tab>
                    <Tab className="react__tabs--tab">Easy Sharing</Tab>
                </TabList>

                <div className="panels">

                    <TabPanel className="panel ">
                        <div className="panel__img">
                            <img src={TabletImage} alt={`${TabletImage} img`} />
                        </div>

                        <div className="panel__text">
                            <h1 className="panel__text--header">Bookmark in one click</h1>
                            <p className="panel__text--desc">Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.</p>
                            <a href="#" className="panel__text--link">More Info</a>
                        </div>

                    </TabPanel>

                    <TabPanel className="panel two">

                        <div className="panel__img">
                            <img src={TabletImage2} alt="" />
                        </div>

                        <div className="panel__text">
                            <h1 className="panel__text--header">Intelligent search</h1>
                            <p className="panel__text--desc">Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.</p>
                            <a href="#" className="panel__text--link">More Info</a>
                        </div>

                    </TabPanel>

                    <TabPanel className="panel three">
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

                    </TabPanel>
                </div>



            </Tabs>



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
