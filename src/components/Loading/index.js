import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";
import { useHistory } from "react-router-dom";

const Loading = ({ handleClick, loading }) => {
  let history = useHistory();

  return (
    <Wrapper>
      {!loading && (
        <>
          <h3>loading...</h3>
          <button disabled>
            <MdAutorenew className="icon-loading-animated" />
          </button>
        </>
      )}
      {loading && (
        <>
          <h3>random</h3>
          <button
            onClick={() => {
              history.push("/");
              handleClick();
            }}
          >
            <MdAutorenew className="icon-loading" />
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default Loading;
