import Details from './Details'

const Question = () => {
    return (
        <>
            <div className="question">
                <h1 className="question__header">Frequently Asked Questions</h1>
                <p className="question__text">Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </div>

            <Details/>

        </>
    )
}

export default Question
