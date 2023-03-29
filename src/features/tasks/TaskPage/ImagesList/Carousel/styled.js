import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CarouselImage = styled.img`
  max-height: 70%;
  max-width: 70%;
  box-shadow: 0px 0px 20px #1b2525;
  border: 3px solid #565f5f;
  z-index: 1000;
`;
