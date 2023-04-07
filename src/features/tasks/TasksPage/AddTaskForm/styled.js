import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.teal};
  color: white;
  transition: opacity 200ms, transform 200ms;
  flex-shrink: 0;

  &:hover {
    opacity: 0.85;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    &:hover {
      transform: scale(1);
    }
  }
`;
