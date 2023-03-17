import styled, { css } from "styled-components";

const teal = ({ theme }) => theme.colors.teal;
const orange = ({ theme }) => theme.colors.orange;

export const FormSection = styled.section`
  max-width: 350px;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 20px #c2d5d5;
  border-radius: 5px;
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Heading = styled.h2`
  margin: 0 0 20px;
  font-size: 28px;
`;

export const Input = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:valid {
    border-color: ${teal};
  }
`;

export const Reset = styled.div`
  text-align: start;
  margin-top: 6px;

  a {
    color: ${({ theme }) => theme.colors.doveGrey};
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  border: 2px solid ${teal};
  font-weight: 700;
  background-color: ${teal};
  color: white;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 180ms ease-in-out;

  &:hover {
    background-color: white;
    color: ${teal};
  }

  ${({ google }) =>
    google &&
    css`
      margin-top: 20px;
      background-color: ${orange};
      border: 2px solid ${orange};

      &:hover {
        color: ${orange};
      }
    `}
`;
