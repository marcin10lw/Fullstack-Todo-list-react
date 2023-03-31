import { useSelector } from "react-redux";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectUser } from "../../auth/authSlice";
import UpdateGeneralInfo from "./UpdateGeneralInfo";

const UserPage = () => {
  const user = useSelector(selectUser);

  return (
    <Container narrow>
      <Header heading={`Hi, ${user.displayName}!`} />
      <Section
        header={"Update general information"}
        content={<UpdateGeneralInfo />}
      />
    </Container>
  );
};

export default UserPage;
