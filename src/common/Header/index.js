import { useLocation } from "react-router-dom";
import { Heading } from "./styled";

const Header = ({ heading }) => {
  const { pathname } = useLocation();

  return (
    <header>
      <Heading inHome={pathname === "/"}>{heading}</Heading>
    </header>
  );
};

export default Header;
