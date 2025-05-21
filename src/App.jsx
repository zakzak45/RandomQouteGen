import { useCallback, useEffect, useState } from 'react';



function App() {
     const quotesURL ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const [quotes, setQuotes] = useState([]);
const [randomQuote, setRandomQuote] = useState('');

const fetchQuotes = useCallback(() => {
    fetch(quotesURL)
        .then(response => response.json())
        .then(data => setQuotes(data.quotes))
        .catch(err => console.error(err));

    // console.log(quotes);
}, [quotesURL]);

// eslint-disable-next-line react-hooks/exhaustive-deps
const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
};

useEffect(() => {
    fetchQuotes();
}, []);

return (
    <div>
        <div id='quote-box'>
            <div id='text'>{randomQuote.quote}</div>
            <div id='author'>{randomQuote.author}</div>
            <button id='new-quote' onClick={handleNewQuote}>
                New Quote
            </button>
            <a href='https://www.twitter.com/intent/tweet' id='tweet-quote'>
                Tweet Quote
            </a>
        </div>
    </div>
);
}

export default App;

