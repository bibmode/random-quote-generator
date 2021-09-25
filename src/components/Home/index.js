import QuoteBlock from "../QuoteBlock";
import { Wrapper } from "./Home.styles";

const Home = ({ author, genre, quote }) => {
  return (
    <Wrapper>
      <QuoteBlock quote={quote} />
    </Wrapper>
  );
};

export default Home;
