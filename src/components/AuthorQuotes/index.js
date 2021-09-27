import { useEffect, useState } from "react";
import QuoteBlock from "../QuoteBlock";
import { Name, Wrapper } from "./AuthorQuotes.styles";
import { MdCached } from "react-icons/md";

const AuthorQuotes = ({ author }) => {
  const [quotes, setQuotes] = useState(null);
  const [keys, setKeys] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let values = {
      quotes: [],
      keys: [],
    };

    const url = new URL("https://quote-garden.herokuapp.com/api/v3/quotes");
    const params = { author: `${author}`, limit: 3 };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        response.data.map((item) => {
          values.quotes.push(item.quoteText);
          values.keys.push(item._id);
        });
        setQuotes(values.quotes);
        setKeys(values.keys);
        setLoaded(true);
      });
  }, []);

  return (
    <Wrapper>
      <Name>
        <h1>{author}</h1>
      </Name>
      {!loaded && <MdCached className="loading-icon" />}
      {loaded &&
        quotes.map((quote, index) => (
          <QuoteBlock quote={quote} key={keys[index]} />
        ))}
    </Wrapper>
  );
};

export default AuthorQuotes;
