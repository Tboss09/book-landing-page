import arrow from '../images/icon-arrow.svg'
import React from 'react'

const Details = () => {
    return (
        <div className="details">

            <div className="details__one showHide">

                <div className="question">
                    <div className=" question__header">
                        <h2 >What is Bookmark</h2>
                        <img src={arrow} alt="arrowDown" />
                    </div>

                    <div className=" question__answer">
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Fusce tincidunt
                            justo eget ultricies fringilla.
                            Phasellus blandit ipsum quis quam ornare mattis.
                </p>

                    </div>
                </div>

            </div>

            <div className="details__one showHide">
                <div className="question">

                    <div className="question__header">
                        <h2 className="header__question">How can i request a new browser</h2>
                        <img src={arrow} alt="arrowDown" />
                    </div>

                    < p className="question__answer">
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </ p>
                </div>
            </div>


            <div className="details__one showHide">

                <div className="question">
                    <div className="question__header">
                        <h2>Is there a mobile app?</h2>
                        <img src={arrow} alt="arrowDown" />
                    </div>
                </div>

                <p className="question__answer">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce tincidunt
                    justo eget ultricies fringilla.
                    Phasellus blandit ipsum quis quam ornare mattis.

                </p>
            </div>

            <div className="details__one showHide">

                <div className="question">
                    <div className="question__header">
                        <h2>What about Other Chromium browsers</h2>
                        <img src={arrow} alt="arrowDown" />
                    </div>
                </div>

                <p className="question__answer">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce tincidunt
                    justo eget ultricies fringilla.
                    Phasellus blandit ipsum quis quam ornare mattis.

                </p>
            </div>


            <div className="infoButton">
                <a href="#"  className="infoButton__link ">More Info</a>
            </div>
        </div >
    )
}

export default Details
