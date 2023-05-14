import styled from "styled-components";

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 8px;
  padding: 10px;
  border: 2px solid #080858;
  font-size: 24px;
  text-align: center;
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  margin: 0 auto;
  margin-right: 0;
  margin-left: 0;
  background-color: #8d8ddb;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(86, 136, 194);
  font-weight: 600;
  font-size: 22px;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  border: none;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MainForm = styled.form`
  margin-bottom: 60px;
`;
