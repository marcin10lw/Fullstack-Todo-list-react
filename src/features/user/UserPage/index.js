import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import UpdateGeneralInfo from "./UpdateGeneralInfo";
import UpdatePassword from "./UpdatePassword";
import UpdateEmail from "./UpdateEmail";
import { auth } from "../../../config/firebase";
import DeleteAccount from "./DeleteAccount";

const UserPage = () => {
  const user = auth.currentUser;
  const isUserSignerInWithGoogle =
    user.providerData[0].providerId === "google.com";

  return (
    <Container narrow>
      <Header heading={`Hi, ${user.displayName}!`} />
      <Section
        header={"Update general information"}
        content={<UpdateGeneralInfo />}
      />
      {!isUserSignerInWithGoogle && (
        <Section header={"Update password"} content={<UpdatePassword />} />
      )}
      {!isUserSignerInWithGoogle && (
        <Section
          header={"Update email"}
          content={<UpdateEmail />}
          optionalContent={<span>{user.email}</span>}
        />
      )}
      <Section header={"Delete account"} content={<DeleteAccount />} />
    </Container>
  );
};

export default UserPage;
