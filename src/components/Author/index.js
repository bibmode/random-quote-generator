import { Wrapper, TextContent } from "./Author.styles";
import { MdTrendingFlat } from "react-icons/md";

const Author = ({ author, genre }) => {
  return (
    <Wrapper>
      <TextContent>
        <h3>{author}</h3>
        <h4>{genre}</h4>
      </TextContent>
      <MdTrendingFlat className="icon-arrow" />
    </Wrapper>
  );
};

export default Author;
