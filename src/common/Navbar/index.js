import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";
import { selectIsLoggedIn, selectUser } from "../../features/auth/authSlice";
import {
  StyledNavbar,
  LinksList,
  StyledNavLink,
  NavWrapper,
  LogoutButton,
} from "./styled";

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {}
  };

  return (
    <NavWrapper>
      <StyledNavbar>
        <LinksList>
          {isLoggedIn && (
            <li>
              <StyledNavLink to="/tasks">Tasks</StyledNavLink>
            </li>
          )}

          <li>
            <StyledNavLink to="author">About</StyledNavLink>
          </li>

          {!isLoggedIn && (
            <li>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </li>
          )}

          {isLoggedIn && (
            <LogoutButton as="button" onClick={logoutUser}>
              Logout
            </LogoutButton>
          )}
          {user && <span>Hi, {user.displayName}</span>}
        </LinksList>
      </StyledNavbar>
    </NavWrapper>
  );
};

export default Navbar;
