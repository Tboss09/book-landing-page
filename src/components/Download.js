const Download = ({ browser, logo, version }) => {
    return (
        <>
        
                <div className="download__browsers">
                    <div className={`download__browsers--icon ${browser}`}>
                        <img src={`${logo}`} alt={`img of ${browser} Browser`} />

                        <h1 className="header">{`Add to ${browser}`}</h1>
                        <p className="text">{`Minimum version ${version}`}</p>

                        <div className="download__browsers--btn">
                            <a href="#"> Add & Install Extension</a>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Download
