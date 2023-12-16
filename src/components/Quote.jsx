import React, { useEffect, useState } from 'react';


function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random quote from the Quotable API
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="quote-container">
      <div className="card">
        <div className="card-body">
          <p className="quote-text">
            "{quote}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
