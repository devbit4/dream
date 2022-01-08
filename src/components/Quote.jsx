import React, { useEffect, useState } from 'react';

const Quote = (props) => {
    let [quote, setQuote] = useState(null);
    let [author, setAuthor] = useState(null);

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(data => data.json())
            .then(quote => {
                setQuote(quote.content);
                setAuthor(quote.author);
            })
    }, [])


    return (
        <div className='quote'>
            <marquee><strong>Today's quote : </strong>
                <span>" {quote} "</span>
                <span> - {author}</span></marquee>
        </div>
    )
};

export default Quote;