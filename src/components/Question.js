import Details from './Details'

const Question = () => {
    return (
        <>
            <div className="freqQuestion">
                <h1 className="freqQuestion__header">Frequently Asked Questions</h1>
                <p className="freqQuestion__text">Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </div>

            <Details />

        </>
    )
}

export default Question
