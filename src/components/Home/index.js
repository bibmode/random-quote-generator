import Author from "../Author";
import QuoteBlock from "../QuoteBlock";
import { Wrapper } from "./Home.styles";

const Home = ({ author, genre, quote }) => {
  return (
    <Wrapper>
      <QuoteBlock quote={quote} />
      <Author author={author} genre={genre} />
    </Wrapper>
  );
};

export default Home;
