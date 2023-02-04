import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: color 150ms;

  &:hover {
    color: hsl(180deg 100% 25% / 70%);
  }

  &:disabled {
    color: #c1c4c4;

    ${({ error }) =>
      error &&
      css`
        color: #b76b6b;
      `}
  }
`;
