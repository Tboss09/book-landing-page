import arrow from '../images/icon-arrow.svg'
import React from 'react'

const Details = () => {
    return (
        <div className="details">

            <div className="details__one detail">
                <div className="question">
                    <h2 className="detail">What is Bookmark</h2>
                    <img src={arrow} alt="arrowDown" />
                </div>

                <p className="answer">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce tincidunt
                    justo eget ultricies fringilla.
                    Phasellus blandit ipsum quis quam ornare mattis.

                </p>
            </div>

            <div className="details__one detail">
                <div className="header">
                    <h2 className="detail">How can i request a new browser</h2>
                    <img src={arrow} alt="arrowDown" />
                </div>
                < p className="answer">
                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </ p>
            </div>

            <div className="details__one detail">

                <div className="question">
                    <h2 className="detail">Is there a mobile app?</h2>
                    <img src={arrow} alt="arrowDown" />
                </div>

                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce tincidunt
                    justo eget ultricies fringilla.
                    Phasellus blandit ipsum quis quam ornare mattis.

                </p>
            </div>


            <div className="infoButton">
                <button className="moreInfo">More Info</button>
            </div>
        </div >
    )
}

export default Details
