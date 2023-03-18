import { StyledNavbar, LinksList, StyledNavLink, NavWrapper } from "./styled";

const Navbar = () => {
  return (
    <NavWrapper>
      <StyledNavbar>
        <LinksList>
          <li>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/tasks">Tasks</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="author">About</StyledNavLink>
          </li>
        </LinksList>
      </StyledNavbar>
    </NavWrapper>
  );
};

export default Navbar;
