import { Wrapper, TextContent } from "./Author.styles";
import { MdTrendingFlat } from "react-icons/md";
import { useHistory } from "react-router";

const Author = ({ author, genre }) => {
  let history = useHistory();

  return (
    <Wrapper
      onClick={() => {
        history.push("/authorquotes");
      }}
    >
      <TextContent>
        <h3>{author}</h3>
        <h4>{genre}</h4>
      </TextContent>
      <MdTrendingFlat className="icon-arrow" />
    </Wrapper>
  );
};

export default Author;
