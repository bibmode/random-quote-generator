import { Quote, Wrapper } from "./QuoteBlock.styles";

const QuoteBlock = () => {
  return (
    <Wrapper>
      <Quote>
        <p>
          “The first rule of any technology used in a business is that
          automation applied to an efficient operation will magnify the
          efficiency. The second is that automation applied to an inefficient
          operation will magnify the inefficiency.”
        </p>
      </Quote>
    </Wrapper>
  );
};

export default QuoteBlock;
