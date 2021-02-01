import React from 'react'

const StayUpdated = () => {
    return (
        <div className="stayUpdated">

            <div className="stayUpdated__text">
                <h4>35,000+ already joined</h4>
                <h1>Stay up-to-date with what we’re doing</h1>
            </div>

            <div className="stayUpdated__email">
                <form action="#">
                    <input type="email" required placeholder="Enter Your Email Address" />
                    <input type="submit" value="Contact Us" />
                </form>
            </div>
        </div>
    )
}

export default StayUpdated
