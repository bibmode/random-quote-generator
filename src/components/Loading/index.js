import React from "react";
import { MdAutorenew } from "react-icons/md";
import { Wrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <Wrapper>
      <h3>random</h3>
      <input type="checkbox" id="loading-checkbox" />
      <label for="loading-checkbox">
        <MdAutorenew className="icon-loading" />
      </label>
    </Wrapper>
  );
};

export default Loading;
