import React from "react";
import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";

const Loading = ({ handleClick }) => {
  return (
    <Wrapper>
      <h3>random</h3>
      <button onClick={handleClick}>
        <MdAutorenew className="icon-loading" />
      </button>
    </Wrapper>
  );
};

export default Loading;
