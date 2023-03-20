import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  text-align: center;
  color: darkred;
  margin: 3px 0 0;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  top: 122px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 100ms ease-in-out;

  ${({ error }) =>
    error &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
