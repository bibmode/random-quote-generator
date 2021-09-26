import "./App.css";
import Home from "./components/Home";
import Loading from "./components/Loading";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthorQuotes from "./components/AuthorQuotes";

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
        setQuote(data.data[0].quoteText);
        setAuthor(data.data[0].quoteAuthor);
        setGenre(data.data[0].quoteGenre);
        setIsPending(false);
      });
  };

  return (
    <div className="App">
      <Router>
        {<Loading handleClick={handleClick} loading={!isPending} />}
        <Switch>
          <Route exact path="/">
            <Home quote={quote} author={author} genre={genre} />
          </Route>
          <Route exact path="/authorquotes">
            <AuthorQuotes author={author} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
