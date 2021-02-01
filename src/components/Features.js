import TabletImage from '../images/illustration-hero.svg'

const Features = () => {
    return (
        <div className="main__features features">
            <h1 className="features__header">Features</h1>
            <p className="features__text">
                Our aim is to make it quick and easy for you
                to access your favourite websites.
                Your bookmarks sync between your devices
                so you can access them on the go.
            </p>

            <div className="features__tabs">
                <p className="features__tabs--text">Simple Bookmarking</p>
                <p className="features__tabs--text">Speedy Searching</p>
                <p className="features__tabs--text">Easy Sharing</p>
            </div>



            <div className="features__tabs">
                <h1 className="features__header">Bookmark in one click</h1>

                <p className="features__text">
                    Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.
                </p>

            </div>
        </div>
    )
}

export default Features
