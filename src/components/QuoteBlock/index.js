import { Quote, Wrapper } from "./QuoteBlock.styles";

const QuoteBlock = ({ quote }) => {
  return (
    <Wrapper>
      <Quote>
        <p>{quote}</p>
      </Quote>
    </Wrapper>
  );
};

export default QuoteBlock;
