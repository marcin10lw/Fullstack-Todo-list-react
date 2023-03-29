import styled from "styled-components";

export const StyledImagesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ListItem = styled.li``;

export const ImageWrapper = styled.div`
  box-shadow: 0px 3px 20px #c1c1c1;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  min-height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
