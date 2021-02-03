import arrow from '../images/icon-arrow.svg'
import arrowDown from '../images/icon-up.svg'
import { useState } from 'react'

const Details = () => {

    const [detail, setDetail] = useState(false);
    const [detailTwo, setDetailTwo] = useState(false);
    const [detailThree, setDetailThree] = useState(false);
    const [detailFour, setDetailFour] = useState(false);


    // const [detailTwo, setDetailTwo] = useState(false);
    // const [detailThree, setDetailThree] = useState(false);

    return (
        <div className="details">

            <div className="details__one showHide" onClick={() => setDetail(!detail)}>

                <div className="question" >
                    <div className=" question__header">
                        <h2 >What is Bookmark</h2>
                        <img src={detail ? arrowDown : arrow} alt="arrowDown" />
                    </div>

                    <div className={`question__answer ${detail ? "active" : ''}`}>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Fusce tincidunt
                            justo eget ultricies fringilla.
                            Phasellus blandit ipsum quis quam ornare mattis.
                </p>

                    </div>
                </div>

            </div>

            <div className="details__one showHide" onClick={() => setDetailTwo(!detailTwo)}>

                <div className="question">
                    <div className="question__header ">
                        <h2 >How can I request a new browser?</h2>
                        <img src={detailTwo ? arrowDown : arrow} alt={detailTwo ? arrowDown : arrow} />
                    </div>

                    <div className={`question__answer ${detailTwo ? "active" : ""}`}>
                        <p>
                            Vivamus luctus eros aliquet convallis ultricies.
                            Mauris augue massa, ultricies non ligula.
                            Suspendisse imperdiet.
                            Vivamus luctus eros
                            aliquet convallis ultricies.
                            Mauris augue massa,
                            ultricies non ligula.
                            Suspendisse imperdie tVivamus luctus
                            eros aliquet convallis ultricies.
                            Mauris augue massa, ultricies non ligula.
                            Suspendisse imperdiet.

                </p>

                    </div>
                </div>

            </div>

            <div className="details__one showHide" onClick={() => setDetailThree(!detailThree)}>

                <div className="question">
                    <div className=" question__header">
                        <h2 >  Is there a mobile app?</h2>
                        <img src={detailThree ? arrowDown : arrow} alt="arrowDown" />
                    </div>

                    <div className={`question__answer ${detailThree ? "active" : ''}`}>
                        <p>

                            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                            sollicitudin ex et ultricies bibendum.

                </p>

                    </div>
                </div>

            </div>

            <div className="details__one showHide" onClick={() => setDetailFour(!detailFour)}>

                <div className="question">
                    <div className=" question__header">
                        <h2 >  What about other Chromium browsers?
</h2>
                        <img src={detailFour? arrowDown : arrow}alt="arrowDown" />
                    </div>

                    <div className={`question__answer ${detailFour ? "active" : ''}`}>
                        <p>

                            Integer condimentum ipsum id imperdiet finibus.
                            Vivamus in placerat mi, at euismod dui. Aliquam
                            vitae neque eget nisl gravida pellentesque non ut velit.
                </p>

                    </div>
                </div>

            </div>


            <div className="infoButton">
                <a href="#home" className="infoButton__link ">More Info</a>
            </div>
        </div >
    )
}

export default Details
