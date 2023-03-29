import styled from "styled-components";

export const StyledImagesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0px 3px 20px #c1c1c1;
  cursor: pointer;
  transition: transform 80ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 3px;
  width: 100%;
  min-height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
