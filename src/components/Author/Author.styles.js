import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: #fff;
  font-family: inherit;
  outline: none;
  border: none;
  box-sizing: border-box;
  width: min(67.2rem, 90%);
  margin: auto;
  margin-top: 10.9rem;
  padding: 4rem 2.9rem;
  color: #333333;
  transition: all 0.3s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-arrow {
    font-size: 2.5rem;
    color: #fff;
  }

  :hover {
    background-color: #333333;
    cursor: pointer;

    > * > h3 {
      color: #fff;
    }
  }
`;

export const TextContent = styled.div`
  text-align: left;
  > * {
    margin: 0;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #4f4f4f;
    line-height: 1.6;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #828282;
  }
`;
