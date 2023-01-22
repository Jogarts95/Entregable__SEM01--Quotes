import React from 'react'

const QuoteButton = ({newQuote, color}) => {
    return (
        <button className='quoteBox__button' onClick={newQuote} style={{backgroundColor: color}}>
            <i className='bx bxs-right-arrow'></i>
        </button>
    )
}

export default QuoteButton