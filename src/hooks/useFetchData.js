import { useEffect, useState } from "react";

const useFetchData = (randomNumber) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(null);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[randomNumber]);
        setQuote(data.data[randomNumber].quoteText);
        setAuthor(data.data[randomNumber].quoteAuthor);
        setGenre(data.data[randomNumber].quoteGenre);
      });
  }, [randomNumber]);
  return { quote, author, genre };
};

export default useFetchData;
