import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: block;
  height: 0;
  padding-top: 100%;
  position: relative;

  transition: all 300ms linear;

  &:hover {
    cursor: pointer;
    transform: ${(props) => !props.isModalOpen && "rotate(45deg)"};
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  max-width: none;
  max-height: none;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  display: flex;
  top: 40px;
  right: 0;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 2px solid black;
  background-color: #fc7676;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 600;
`;
