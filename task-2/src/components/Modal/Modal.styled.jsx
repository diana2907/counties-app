import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  overflow: auto;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  z-index: 10;
  background-color: rgb(214, 235, 226);
  box-shadow: 0px 1px 3px rgba(109, 87, 87, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
`;

export const Image = styled.img`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 28px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -15px;
  top: -15px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 15px;
  border: none;
  border-radius: 15px;

  background-color: rgb(214, 235, 226);

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(144 181 165);
  }
`;
