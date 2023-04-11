import styled from "styled-components";
import { Button } from "../../../../common/Button";

export const ChangePasswordInfo = styled.p`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.doveGrey};
`;

export const FormText = styled.span`
  display: inline-block;
  margin-right: 8px;
  max-width: 200px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 3px;
  }
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.casal};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &:invalid {
    border: 1px solid ${({ theme }) => theme.colors.falcon};
  }
`;

export const ChangePasswordButton = styled(Button)`
  font-weight: 700;
`;
