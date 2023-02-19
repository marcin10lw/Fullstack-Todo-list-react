import styled from "styled-components";

export const DateInput = styled.input`
  max-width: 20%;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.doveGrey};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.doveGrey};
  margin-right: 10px;
`;
