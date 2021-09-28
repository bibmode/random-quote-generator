import { useEffect, useState } from "react";
import QuoteBlock from "../QuoteBlock";
import { Name, Wrapper } from "./AuthorQuotes.styles";
import { MdCached } from "react-icons/md";
import Footer from "../Footer";

const AuthorQuotes = ({ author }) => {
  const [quotes, setQuotes] = useState(null);
  const [keys, setKeys] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

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
        response.data.forEach((item) => {
          values.quotes.push(item.quoteText);
          values.keys.push(item._id);
        });
        setQuotes(values.quotes);
        setKeys(values.keys);
        setLoaded(true);
      });

    return () => abortCont.abort();
  }, [author]);

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
      <Footer className="footer" />
    </Wrapper>
  );
};

export default AuthorQuotes;
