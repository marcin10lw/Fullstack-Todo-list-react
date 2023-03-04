import styled, { css } from "styled-components";
import { Button } from "../../TasksPage/Button";

export const EditButton = styled(Button)`
  margin-right: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-height: 100vh;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #2b2828;
  opacity: 0.4;
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
`;

export const Form = styled.form`
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 450px;
      width: 100%;
      border: 1px solid grey;
      background-color: white;
      padding: 40px;
      gap: 20px;
      z-index: 10;
      border-radius: 10px;
      border: none;
      opacity: 0.85;
    `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 20px;

  &:focus {
    outline: 1px solid teal;
  }
`;

export const SaveNewContent = styled.button`
  padding: 10px 15px;
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.doveGrey};
    background-color: transparent;
  }
`;
