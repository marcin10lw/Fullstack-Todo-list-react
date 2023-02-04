import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import checkMark from "./images/check.png";
import removeMark from "./images/delete.png";

export const Tasks = styled.ul`
  list-style: none;
  padding: 0;
  padding: 20px;
`;

export const Task = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid hsl(0, 0%, 85%);
  grid-gap: 10px;

  ${({ hiden }) =>
    hiden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.teal};
  transition: opacity 150ms;

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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkTeal};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;
