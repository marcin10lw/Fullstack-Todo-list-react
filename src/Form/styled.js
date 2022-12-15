import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NewTask = styled.input`
  padding: 10px;
  border: 2px solid hsl(0, 0%, 84%);
  flex-grow: 1;

  @media (max-width: 767px) {
    width: 100%;
  } ;
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid #008080;
  background-color: teal;
  color: white;
  transition: opacity 200ms, transform 200ms;

  &:hover {
    opacity: 0.85;
    transform: scale(1.1);
  }
  &:active {
    opacity: 0.70;
  }

  @media (max-width: 767px) {
    width: 100%;
    &:hover {
      transform: scale(1);
    }
  }
`;
