import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 25px 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  position: relative;

  &:hover {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ffffffa1;
      position: absolute;
      bottom: 1;
    }
  }

  &.active {
    font-weight: 700;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: white;
      position: absolute;
      bottom: 1;
    }
  }
`;
