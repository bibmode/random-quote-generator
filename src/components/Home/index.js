import Author from "../Author";
import Footer from "../Footer";
import QuoteBlock from "../QuoteBlock";
import { Content, Wrapper } from "./Home.styles";

const Home = ({ author, genre, quote }) => {
  return (
    <Wrapper>
      <Content>
        <QuoteBlock quote={quote} />
        <Author author={author} genre={genre} />
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default Home;
