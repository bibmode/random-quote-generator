import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  margin-right: 10rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-inline: 1rem;
  }

  input {
    display: none;
  }

  .icon-loading {
    font-size: 2.2rem;
    cursor: pointer;
  }
`;
