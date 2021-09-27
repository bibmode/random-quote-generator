import Author from "../Author";
import QuoteBlock from "../QuoteBlock";
import { Content, Wrapper } from "./Home.styles";

const Home = ({ author, genre, quote }) => {
  return (
    <Wrapper>
      <Content>
        <QuoteBlock quote={quote} />
        <Author author={author} genre={genre} />
      </Content>
    </Wrapper>
  );
};

export default Home;
