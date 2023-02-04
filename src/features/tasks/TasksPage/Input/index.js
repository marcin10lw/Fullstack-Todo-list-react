import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: 2px solid hsl(0, 0%, 84%);
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  } ;
`;
