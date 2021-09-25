import React from "react";
import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";

const Loading = ({ handleClick }) => {
  return (
    <Wrapper>
      <h3>random</h3>
      <input type="checkbox" id="loading-checkbox" />
      <button onClick={handleClick}>
        <MdAutorenew className="icon-loading" />
      </button>
    </Wrapper>
  );
};

export default Loading;
