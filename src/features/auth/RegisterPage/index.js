import { Link } from "react-router-dom";
import Container from "../../../common/Container/styled";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthMessage,
  AuthSection,
} from "../AuthStyled";

const RegisterPage = () => {
  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Register</AuthHeading>
        <AuthForm>
          <AuthInput type="email" placeholder="Email..." required />
          <AuthInput type="password" placeholder="Password..." required />
          <AuthInput
            type="password"
            placeholder="Confirm Password..."
            required
          />
          <AuthButton>Register</AuthButton>
        </AuthForm>
        <AuthMessage>
          Already have an account? <Link to="/login">Login</Link>
        </AuthMessage>
      </AuthSection>
    </Container>
  );
};

export default RegisterPage;
