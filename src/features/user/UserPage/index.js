import { useSelector } from "react-redux";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectUser } from "../../auth/authSlice";
import UpdateGeneralForm from "./UpdateGeneralForm";

const UserPage = () => {
  const user = useSelector(selectUser);

  return (
    <Container narrow>
      <Header heading={`Hi, ${user.displayName}!`} />
      <Section
        header={"Update general information"}
        content={<UpdateGeneralForm />}
      />
    </Container>
  );
};

export default UserPage;
