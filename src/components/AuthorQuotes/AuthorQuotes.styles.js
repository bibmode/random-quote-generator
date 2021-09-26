import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  width: min(61.4rem, 90%);
  text-align: start;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;
