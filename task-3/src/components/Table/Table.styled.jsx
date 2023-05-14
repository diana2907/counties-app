import styled from "styled-components";

export const MainTable = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(141 141 219 / 56%);
  color: #2d2626;
  font-size: 12px;

  @media screen and (min-width: 500px) {
    font-size: 14px;
  }

  @media screen and (min-width: 900px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Title = styled.caption`
  background: #8d8ddb;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: 500px) {
    padding: 8px;
    font-size: 22px;
  }

  @media screen and (min-width: 900px) {
    padding: 12px;
    font-size: 26px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px;
    font-size: 32px;
  }
`;

export const HeadCell = styled.th`
  text-align: left;
  padding: 5px 5px;

  @media screen and (min-width: 500px) {
    padding: 5px 5px;
  }

  @media screen and (min-width: 900px) {
    padding: 8px 8px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px 15px;
  }
`;
