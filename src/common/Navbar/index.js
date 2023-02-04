import { StyledNavbar, LinksList, StyledNavLink } from "./styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LinksList>
        <li>
          <StyledNavLink to="/">Zadania</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="autor">O autorze</StyledNavLink>
        </li>
      </LinksList>
    </StyledNavbar>
  );
};

export default Navbar;
