import styled, { css } from "styled-components";
import { Button } from "../../../common/Button";
import { FiEdit } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export const EditButton = styled(Button)`
  margin-right: auto;
`;

export const EditIcon = styled(FiEdit)`
  color: #1b4332;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  transition: all 100ms ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
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
  position: relative;
  max-width: 450px;
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 0px 20px #1b2525;
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 40px;
  gap: 20px;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 80%;
  }
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: grey;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hibiscus};
  }
`;

export const CloseButtonIcon = styled(IoIosClose)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    outline: 1px solid teal;
  }
`;
