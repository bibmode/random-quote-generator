import { useEffect, useState } from "react";
import { Route } from "react-router";
import QuoteBlock from "../QuoteBlock";
import { Name, Wrapper } from "./AuthorQuotes.styles";

const AuthorQuotes = ({ author }) => {
  const renderQuotes = () => {
    let values = {
      quotes: [],
      keys: [],
    };
    const url = new URL("https://quote-garden.herokuapp.com/api/v3/quotes");

    const params = { author: `${author}`, limit: 3 };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.data.forEach((item) => {
          values.quotes.push(item.quoteText);
          values.keys.push(item._id);
        });
        return values;
      });
    return values;
  };

  let finalValues = renderQuotes();

  const [quotes, setQuotes] = useState(finalValues.quotes);
  const [keys, setKeys] = useState(finalValues.keys);
  console.log(quotes, keys);

  return (
    <Wrapper>
      <Name>
        <h1>{author}</h1>
      </Name>
      {[...quotes].map((quote, index) => (
        <QuoteBlock quote={quote} key={keys[index]} />
      ))}
    </Wrapper>
  );
};

export default AuthorQuotes;
