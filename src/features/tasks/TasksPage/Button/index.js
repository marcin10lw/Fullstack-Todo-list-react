import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.lightTeal};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};

    ${({ error }) =>
      error &&
      css`
        color: #b76b6b;
      `}
  }
`;
