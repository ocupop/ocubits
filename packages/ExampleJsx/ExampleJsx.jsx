import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ExampleJsx = ({ characterName }) => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuoteByFaction/${characterName}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setQuote(data.results[0].quote);
        } else {
          setQuote("Sorry, I couldn't find any quotes for that character.");
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('An error occurred while fetching the quote.');
      }
    };

    fetchQuote();
  }, [characterName]);

  return (
    <div>
      <h2>{characterName}</h2>
      <p>{quote}</p>
    </div>
  );
};

ExampleJsx.propTypes = {
  characterName: PropTypes.string.isRequired,
};

export default ExampleJsx;
