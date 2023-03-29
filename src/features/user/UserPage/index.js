import { useSelector } from "react-redux";
import { selectUser } from "../../auth/authSlice";
import Container from "../../../common/Container/styled";
import Section from "../../../common/Section";

const UserPage = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Section header={`Hi, ${user.displayName}!`} />
    </Container>
  );
};

export default UserPage;
