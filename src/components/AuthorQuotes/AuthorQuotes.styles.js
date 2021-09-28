import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.7rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .loading-icon {
    margin-top: 3rem;
    font-size: 4rem;
    color: rgba(#333, 0.5);
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

  > * {
    margin-bottom: 14rem;
    :last-child {
      margin-bottom: 0;
    }
  }

  h4 {
    margin-top: 5rem;
  }
`;

export const Name = styled.div`
  width: min(61.4rem, 90%);
  text-align: start;
  margin-bottom: 14rem;
  margin-top: 3rem;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    margin: 0;
  }
`;
