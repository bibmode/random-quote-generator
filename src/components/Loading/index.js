import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";

const Loading = ({ handleClick, loading }) => {
  return (
    <Wrapper>
      {!loading && (
        <>
          <h3>loading...</h3>
          <button onClick={handleClick} disabled>
            <MdAutorenew className="icon-loading-animated" />
          </button>
        </>
      )}
      {loading && (
        <>
          <h3>random</h3>
          <button onClick={handleClick}>
            <MdAutorenew className="icon-loading" />
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default Loading;
