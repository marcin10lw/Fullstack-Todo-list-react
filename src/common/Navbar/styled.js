import { NavLink } from "react-router-dom";
import styled from "styled-components";

const white = ({ theme }) => theme.colors.white;
const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.teal};
  position: relative;
`;

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};

  @media (max-width: ${bpMobile}px) {
    /* position: fixed;
    height: 100vh;
    width: 50vw; */
  }
`;

export const LinksList = styled.ul`
  margin: 0;
  padding: 25px 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${bpMobile}px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${white};
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
      background-color: ${white};
      position: absolute;
      bottom: 1;
    }
  }
`;

export const LogoutButton = styled(StyledNavLink)`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
      position: absolute;
      bottom: 1;
    }
  }
`;
