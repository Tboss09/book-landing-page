import React from 'react'

const StayUpdated = () => {
    return (
        <div className="stayUpdated">

            <div className="stayUpdated__text">
                <h3>35,000+ already joined</h3>
                <h4>Stay up-to-date with what we’re doing</h4>
            </div>

            <div className="stayUpdated__email">
                <form action="#">
                    <div className="email">
                        <input type="email" required placeholder="Enter Your Email Address" />
                    </div>
                    <div className="submit">
                        <button role="submit">Contact Us</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StayUpdated
