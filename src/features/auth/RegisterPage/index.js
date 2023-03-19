import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../common/Container/styled";
import Loader from "../../../common/Loader";
import { auth } from "../../../config/firebase";
import { addUserToDatabase } from "../authFirebaseFunctions";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthMessage,
  AuthSection,
} from "../AuthStyled";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match.");
      return;
    }
    setIsLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoading(false);
      toast.success("Account Registered.");
      navigate("/tasks");

      addUserToDatabase(user);
    } catch (error) {
      const errorCode = error.code;
      setIsLoading(false);

      if (errorCode === "auth/email-already-in-use") {
        toast.error("User with this email arleady exists");
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container auth>
        <AuthSection>
          <AuthHeading>Register</AuthHeading>
          <AuthForm onSubmit={registerUser}>
            <AuthInput
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="Email..."
              required
            />
            <AuthInput
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Password..."
              required
            />
            <AuthInput
              value={passwordConfirm}
              onChange={({ target }) => setPasswordConfirm(target.value)}
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
    </>
  );
};

export default RegisterPage;
