import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${({ inHome }) =>
    inHome &&
    css`
      text-align: center;
    `}
`;
