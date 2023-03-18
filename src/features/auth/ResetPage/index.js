import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../common/Container/styled";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthSection,
} from "../AuthStyled";
import { FlexWrapper } from "./styled";

const ResetPage = () => {
  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Reset Password</AuthHeading>
        <AuthForm>
          <AuthInput type="email" placeholder="Email..." required />
          <AuthButton>Reset Password</AuthButton>
        </AuthForm>
        <FlexWrapper>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </FlexWrapper>
      </AuthSection>
    </Container>
  );
};

export default ResetPage;
