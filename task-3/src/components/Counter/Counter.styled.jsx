import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 500px) {
    font-size: 18px;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 50px;
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;
