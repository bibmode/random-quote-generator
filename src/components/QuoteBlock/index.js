import { Quote, Wrapper } from "./QuoteBlock.styles";

const QuoteBlock = ({ author, genre, quote }) => {
  return (
    <Wrapper>
      <Quote>
        <p>{quote}</p>
      </Quote>
    </Wrapper>
  );
};

export default QuoteBlock;
