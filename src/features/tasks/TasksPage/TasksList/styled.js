import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import checkMark from "./images/check.png";
import removeMark from "./images/delete.png";

const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const Tasks = styled.ul`
  list-style: none;
  padding: 0;
  padding: 20px;
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid hsl(0, 0%, 85%);
  grid-gap: 10px;
  transition: border-bottom 100ms ease-in-out;

  &:hover {
    border-bottom: 2px solid #5ea6a6c2;
  }

  @media (max-width: ${bpMobile}px) {
    grid-template-columns: auto 1fr auto;
  }

  ${({ hiden }) =>
    hiden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-basis: 100%;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkTeal};
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;

export const DeadlineDate = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.doveGrey};
  margin-right: 20px;
  flex-shrink: 0;

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.teal};
  transition: opacity 150ms;
  flex-shrink: 0;

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }

  ${({ done }) =>
    done &&
    css`
      background-image: url(${checkMark});
      background-size: cover;
      background-position: center;
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-image: url(${removeMark});
      background-size: cover;
      background-position: center;
    `}
`;
