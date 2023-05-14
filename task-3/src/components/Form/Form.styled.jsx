import styled from "styled-components";

export const MainForm = styled.form`
  margin-bottom: 30px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 26px;
  border-radius: 8px;
  padding: 6px;
  border: 2px solid #080858;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 500px) {
    padding: 8px;
    font-size: 18px;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 42px;
    padding: 12px;
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    padding: 14px;
    font-size: 24px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  margin: 0 auto;

  background-color: #8d8ddb;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(86, 136, 194);
  font-weight: 600;
  font-size: 12px;
  padding: 8px;
  transition: all 0.3s ease-in-out;
  border: none;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 500px) {
    width: 100px;
    padding: 10px;
    font-size: 14px;
  }

  @media screen and (min-width: 900px) {
    width: 120px;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    width: 140px;
    font-size: 20px;
  }
`;
