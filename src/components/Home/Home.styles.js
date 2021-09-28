import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  height: fit-content;

  h4 {
    bottom: 0;
  }
`;
