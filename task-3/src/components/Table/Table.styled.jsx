import styled from "styled-components";

export const MainTable = styled.table`
  border-collapse: collapse;
  border: 3px solid rgb(141 141 219 / 56%);
  color: #2d2626;
  font-size: 20px;
`;

export const Title = styled.caption`
  background: #8d8ddb;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
`;

export const HeadCell = styled.th`
  text-align: left;
  padding: 20px 30px;
`;
