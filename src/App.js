import "./App.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”"
  );
  const [author, setAuthor] = useState("Bill Gates");
  const [genre, setGenre] = useState("business");
  const [isPending, setIsPending] = useState(false);

  const handleClick = () => {
    setIsPending(true);

    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.data[0].quoteText);
        setAuthor(data.data[0].quoteAuthor);
        setGenre(data.data[0].quoteGenre);
        setIsPending(false);
      });
  };

  return (
    <div className="App">
      {<Loading handleClick={handleClick} loading={!isPending} />}
      <Home quote={quote} author={author} genre={genre} />
    </div>
  );
}

export default App;
