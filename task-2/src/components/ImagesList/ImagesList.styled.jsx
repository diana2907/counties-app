import styled from "styled-components";

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin-bottom: 50px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  position: relative;

  border-radius: 50%;
  border: 5px solid darkgrey;

  transition: all 300ms linear;

  &:first-child {
    border: 5px solid red;
  }
  @media screen and (min-width: 500px) and (max-width: 899px) {
    &:nth-child(2n + 1) {
      border: 5px solid red;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1199px) {
    &:nth-child(3n + 1) {
      border: 5px solid red;
    }
  }

  @media screen and (min-width: 1200px) {
    &:nth-child(4n + 1) {
      border: 5px solid red;
    }
  }

  &:hover {
    border: 5px solid yellow;
  }
`;
