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
  LogoutButton,
  HideNavbarButton,
  HideNavbarIcon,
  OpenNavbarIcon,
  NavOverlay,
  OpenNavbarButton,
  UserPhoto,
  UserDummy,
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
    <>
      <OpenNavbarButton
        onClick={() => setShowNavbar((showNavbar) => !showNavbar)}
      >
        <OpenNavbarIcon />
      </OpenNavbarButton>
      <NavOverlay
        showNavbar={showNavbar}
        onClick={() => setShowNavbar(false)}
      />
      <StyledNavbar showNavbar={showNavbar}>
        <NavList onClick={() => setShowNavbar(false)}>
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
              <StyledNavLink to="/user">
                {user.displayName}
                {user.photoURL ? (
                  <UserPhoto src={user.photoURL} />
                ) : (
                  <UserDummy />
                )}
              </StyledNavLink>
            </ListElement>
          )}
        </NavList>
        <HideNavbarButton onClick={() => setShowNavbar(false)}>
          <HideNavbarIcon />
        </HideNavbarButton>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
