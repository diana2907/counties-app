import styled from "styled-components";

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
