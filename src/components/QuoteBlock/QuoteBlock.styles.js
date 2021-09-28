import styled from "styled-components";

export const Wrapper = styled.div``;

export const Quote = styled.div`
  width: min(61.4rem, 80%);
  margin-inline: auto;
  position: relative;

  @media only screen and (max-width: 48em) {
    //width: 85%;
    margin-right: 8%;
  }

  p {
    font-size: 3.6rem;
    text-align: left;
    line-height: 1.2;
    margin: 0;
  }

  ::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 8px;
    background-color: #f7df94;
    left: min(-10rem, 20%);

    @media only screen and (max-width: 64em) {
      left: -3rem;
    }
  }
`;
