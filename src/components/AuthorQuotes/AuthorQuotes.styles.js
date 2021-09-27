import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loading-icon {
    margin-top: 3rem;
    font-size: 4rem;
    color: #333;
    animation: loadingAnimation 0.8s ease-in infinite;
  }

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Name = styled.div`
  width: min(61.4rem, 90%);
  text-align: start;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;
