import Container from "../../../common/Container/styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { Form, FormSection, Heading, Input, Button, Reset } from "./styled";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container auth>
      <FormSection>
        <Heading>Login</Heading>
        <Form>
          <Input type="email" placeholder="Email..." required />
          <Input type="password" placeholder="Password..." required />
          <Button>Login</Button>
        </Form>
        <Reset>
          <Link to="/reset">Forgot Password?</Link>
        </Reset>
        <Button google>
          <AiOutlineGoogle size={20} /> Login With Google
        </Button>
      </FormSection>
    </Container>
  );
};

export default LoginPage;
