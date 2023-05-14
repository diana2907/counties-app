import styled from "styled-components";
import { Check } from "@styled-icons/entypo/Check";

export const Cell = styled.td`
  padding: 5px 5px;
  max-width: 50px;
  line-height: 1.2;
  word-wrap: break-word;
  @media screen and (min-width: 500px) {
    padding: 5px 5px;
    max-width: 70px;
  }

  @media screen and (min-width: 900px) {
    padding: 8px 8px;
    max-width: 150px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px 15px;
    max-width: 200px;
  }
`;

export const Link = styled.a`
  color: inherit;
  font-weight: 600;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    color: #5e09f6;
  }
`;

export const Row = styled.tr`
  padding: 5px;

  border-top: 3px solid rgb(141 141 219 / 56%);

  @media screen and (min-width: 900px) {
    padding: 8px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px;
  }
`;

export const Checkbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media (min-width: 900px) {
    width: 35px;
    height: 35px;
  }
`;
export const InputCheck = styled.input``;
export const CheckLabel = styled.label``;

export const CheckMark = styled(Check)`
  color: transparent;
  width: 15px;
  height: 15px;

  ${InputCheck}:checked + ${CheckLabel} & {
    color: #8d8ddb;
    border: none;
  }

  @media (min-width: 900px) {
    width: 25px;
    height: 25px;
  }
`;
