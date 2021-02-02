import dots from '../images/bg-dots.svg'

const Download = ({ browser, logo, version }) => {
    return (
        <>

            <div className="install__extension">
                <div className={`install__extension--icon ${browser}`}>

                    <div className="">
                        <img src={`${logo}`} alt={`img of ${browser} Browser`} />
                    </div>

                    <div>
                        <h1 className="header">{`Add to ${browser}`}</h1>
                        <p className="text">{`Minimum version ${version}`}</p>
                    </div>

                    <div className="dots">
                        <img src={dots} alt="" />
                    </div>

                    <div className="install__extension--btn">
                        <a href="#"> Add & Install Extension</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Download
