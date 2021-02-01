import TabletImage from '../images/illustration-hero.svg'
const Main = () => {
    return (
        <main className="main">
            <header className="main__header">
                <img className="main__header--img" src={TabletImage} alt="" />
            </header>
            {/* Main Section */}

            <section className="main__section">
                <div className="main__section--header title">
                    <h1 className="title__header">A Simple Bookmark Manager </h1>
                    <p className="title__text">A clean and simple interface to organize your favorite websites.
                    Open a new browser tab and see your sites load instantly.
                    Try it for free</p>

                    <div className=" title__btn">
                        <button className="title__btn--blue">Get it on Chrome</button>
                        <button className="title__btn--white">Get it on FireFox</button>
                    </div>

                </div>

                {/* {Chrome/FireFox} Button */}

            </section>
        </main>
    )
}

export default Main
