import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled, { css } from "styled-components";

const white = ({ theme }) => theme.colors.white;
const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.teal};
  position: relative;
`;

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  z-index: 10;

  @media (max-width: ${bpMobile}px) {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 50%;
    transition: all 500ms ease-in-out;

    ${({ showNavbar }) =>
      showNavbar &&
      css`
        left: 0;
      `}
  }
`;

export const NavList = styled.ul`
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
    gap: 0;
  }
`;

export const ListElement = styled.li`
  @media (max-width: ${bpMobile}px) {
    width: 100%;
    flex-basis: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${white};
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    font-weight: 700;
  }

  @media (max-width: ${bpMobile}px) {
    padding-left: 20px;
    height: 100%;
    width: 100%;

    &.active {
      background-color: ${({ theme }) => theme.colors.darkTeal};
    }
  }
`;

export const LogoutButton = styled(StyledNavLink)`
  background-color: transparent;
  border: none;
  text-align: start;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${bpMobile}px) {
    padding-left: 20px;
  }
`;

export const HideNavbarIcon = styled(IoIosArrowBack)`
  height: 50px;
  width: 50px;
  color: #bababa;
  transition: transform 60ms ease-in-out;
`;

export const HideNavbarButton = styled.button`
  display: none;

  @media (max-width: ${bpMobile}px) {
    display: block;
    border: none;
    background-color: #056363;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:hover ${HideNavbarIcon} {
      transform: translateX(-5px);
    }
  }
`;
