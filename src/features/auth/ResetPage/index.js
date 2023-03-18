import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../common/Container/styled";
import Loader from "../../../common/Loader";
import { auth } from "../../../config/firebase";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthSection,
} from "../AuthStyled";
import { FlexWrapper } from "./styled";

const ResetPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setIsLoading(false);
      toast.success("Check email reset password.");
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      if (error.code === "auth/user-not-found") {
        toast.error("Account with this email doesn't exist");
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container auth>
        <AuthSection>
          <AuthHeading>Reset Password</AuthHeading>
          <AuthForm onSubmit={resetPassword}>
            <AuthInput
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="Email..."
              required
            />
            <AuthButton>Reset Password</AuthButton>
          </AuthForm>
          <FlexWrapper>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </FlexWrapper>
        </AuthSection>
      </Container>
    </>
  );
};

export default ResetPage;
