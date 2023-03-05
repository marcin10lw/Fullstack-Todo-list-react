import styled, { css } from "styled-components";
import { Button } from "../../TasksPage/Button";

export const EditButton = styled(Button)`
  margin-right: auto;
`;

export const EditTaskMessage = styled.p`
  font-size: 18px;
  margin: 0 0 20px;
  font-weight: 700;
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
  transition: background-color 300ms ease-in-out;

  ${({ show }) =>
    !show &&
    css`
      visibility: hidden;
      animation-name: overlay-hide;
      animation-duration: 300ms;
    `}

  @keyframes overlay-hide {
    from {
      visibility: visible;
    }
    to {
      visibility: hidden;
    }
  }

  ${({ show }) =>
    show &&
    css`
      background-color: rgb(0 0 0 / 26%);
    `}
`;

export const Form = styled.form`
  display: block;
  position: absolute;
  top: -200%;
  left: 50%;
  max-width: 450px;
  width: 100%;
  border: 1px solid grey;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 40px;
  gap: 20px;
  z-index: 10;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
  transition: opacity 300ms ease-in-out, top 1000ms ease-in-out,
    transform 500ms ease-in-out;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      top: 39%;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);
    `};
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
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    color: #414141;
    background-color: transparent;
  }
`;
