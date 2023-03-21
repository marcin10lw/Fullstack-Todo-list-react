import { signOut } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";
import { selectIsLoggedIn, selectUser } from "../../features/auth/authSlice";
import {
  StyledNavbar,
  NavList,
  ListElement,
  StyledNavLink,
  NavWrapper,
  LogoutButton,
  HideNavbarButton,
  HideNavbarIcon,
} from "./styled";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Couldn't Logout...");
    }
  };

  return (
    <NavWrapper>
      <button onClick={() => setShowNavbar(true)}>toggle</button>
      <StyledNavbar showNavbar={showNavbar}>
        <NavList>
          {isLoggedIn && (
            <ListElement>
              <StyledNavLink to="/tasks">Tasks</StyledNavLink>
            </ListElement>
          )}

          <ListElement>
            <StyledNavLink to="author">About</StyledNavLink>
          </ListElement>

          {!isLoggedIn && (
            <ListElement>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </ListElement>
          )}

          {isLoggedIn && (
            <ListElement>
              <LogoutButton as="button" onClick={logoutUser}>
                Logout
              </LogoutButton>
            </ListElement>
          )}
          {user && (
            <ListElement>
              <span>Hi, {user.displayName}</span>
            </ListElement>
          )}
        </NavList>
        <HideNavbarButton onClick={() => setShowNavbar(false)}>
          <HideNavbarIcon />
        </HideNavbarButton>
      </StyledNavbar>
    </NavWrapper>
  );
};

export default Navbar;
