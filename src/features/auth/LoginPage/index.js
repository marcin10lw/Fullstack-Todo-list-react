import Container from "../../../common/Container/styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { Text } from "./styled";
import { Link } from "react-router-dom";
import {
  AuthSection,
  AuthHeading,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthMessage,
} from "../AuthStyled";

const LoginPage = () => {
  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Login</AuthHeading>
        <AuthForm>
          <AuthInput type="email" placeholder="Email..." required />
          <AuthInput type="password" placeholder="Password..." required />
          <AuthButton>Login</AuthButton>
        </AuthForm>
        <Text>
          <Link to="/reset">Forgot Password?</Link>
        </Text>
        <AuthButton google>
          <AiOutlineGoogle size={20} /> Login With Google
        </AuthButton>
        <AuthMessage>
          Don't have an account? <Link to="/register">Register</Link>
        </AuthMessage>
      </AuthSection>
    </Container>
  );
};

export default LoginPage;
