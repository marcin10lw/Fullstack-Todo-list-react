import { StyledNavbar, LinksList, StyledNavLink } from "./styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LinksList>
        <li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="autor">O autorze</StyledNavLink>
        </li>
      </LinksList>
    </StyledNavbar>
  );
};

export default Navbar;
