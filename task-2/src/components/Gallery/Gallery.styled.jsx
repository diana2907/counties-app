import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const TitileWrapper = styled.div`
  padding: 30px 0;
  text-align: center;

  @media screen and (min-width: 500px) {
    padding: 50px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 60px 0;
  }
`;

export const GalleryTitle = styled.h1`
  font-size: 32px;

  margin-bottom: 20px;
  @media screen and (min-width: 500px) {
    font-size: 42px;
  }

  @media screen and (min-width: 900px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 62px;
  }
`;

export const Time = styled.p`
  font-size: 14px;

  @media screen and (min-width: 500px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;
