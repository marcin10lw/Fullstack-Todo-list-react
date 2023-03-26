import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import styled, { css } from "styled-components";

const white = ({ theme }) => theme.colors.white;
const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const NavOverlay = styled.div`
  @media (max-width: ${bpMobile}px) {
    position: fixed;
    z-index: 99;
    min-height: 100vh;
    top: 0;
    left: -100%;
    width: 100%;
    background: #5866666b;
    transition: all 200ms ease-in-out;

    ${({ showNavbar }) =>
      showNavbar &&
      css`
        left: 0;
      `}
  }
`;

export const StyledNavbar = styled.nav`
  margin-top: -0.5px;
  background-color: ${({ theme }) => theme.colors.teal};
  z-index: 999;

  @media (max-width: ${bpMobile}px) {
    margin: auto;
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 70%;
    transition: all 300ms ease-in-out;

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

export const OpenNavbarIcon = styled(IoIosArrowBack)`
  transform: rotate(180deg);
  color: #ffffff;
`;

export const OpenNavbarButton = styled.button`
  display: none;

  @media (max-width: ${bpMobile}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10px;
    height: 65px;
    width: 20px;
    padding: 0;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: ${({ theme }) => theme.colors.teal};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const HideNavbarButton = styled.button`
  display: none;

  @media (max-width: ${bpMobile}px) {
    display: block;
    border: none;
    background-color: #056363;
    width: 100%;
    height: 70px;
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

// export const UserFlex = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   @media (max-width: ${bpMobile}px) {
//     gap: 4px;
//   }
// `;

export const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;

  @media (max-width: ${bpMobile}px) {
    width: 26px;
    height: 26px;
  }
`;

export const UserDummy = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  margin-left: 10px;

  @media (max-width: ${bpMobile}px) {
    width: 26px;
    height: 26px;
  }
`;
