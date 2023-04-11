import { useSelector } from "react-redux";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectUser } from "../../auth/authSlice";
import UpdateGeneralInfo from "./UpdateGeneralInfo";
import UpdatePassword from "./UpdatePassword";
import ResetPage from "../../auth/ResetPage";
import UpdateEmail from "./UpdateEmail";
import { auth } from "../../../config/firebase";

const UserPage = () => {
  const user = useSelector(selectUser);

  return (
    <Container narrow>
      <Header heading={`Hi, ${user.displayName}!`} />
      <Section
        header={"Update general information"}
        content={<UpdateGeneralInfo />}
      />
      <Section header={"Update password"} content={<UpdatePassword />} />
      <Section
        header={"Update email"}
        content={<UpdateEmail />}
        optionalContent={<span>{user.email}</span>}
      />
    </Container>
  );
};

export default UserPage;
