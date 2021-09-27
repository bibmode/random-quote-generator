import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Loading = ({ handleClick, loading, genre }) => {
  let history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [genre]);

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
