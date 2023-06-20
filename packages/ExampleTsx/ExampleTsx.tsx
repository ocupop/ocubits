import React, { useEffect, useState } from 'react';

type ExampleTypescriptProps = {
  characterName: string;
};

type QuoteResponse = {
  results: {
    name: string;
    quote: string;
  }[];
};

const ExampleTypescript: React.FC<ExampleTypescriptProps> = ({ characterName }) => {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuoteByFaction/${characterName}`
        );
        const data: QuoteResponse = await response.json();
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

export default ExampleTypescript;
