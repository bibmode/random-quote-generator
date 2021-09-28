import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  margin-right: 10rem;

  @media only screen and (max-width: 64em) {
    margin-right: 5%;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-inline: 1rem;
    margin-block: 2.5rem;
  }

  button {
    border: none;
    outline: none;
    background-color: #fff;
  }

  .icon-loading {
    font-size: 2.2rem;
    cursor: pointer;
  }

  .icon-loading-animated {
    font-size: 2.2rem;
    cursor: auto;
    animation: loadingAnimation 1s ease-in infinite;
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
