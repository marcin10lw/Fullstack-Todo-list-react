import styled from "styled-components";

export const DateAndTime = styled.input`
  max-width: 20%;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.doveGrey};
`;
