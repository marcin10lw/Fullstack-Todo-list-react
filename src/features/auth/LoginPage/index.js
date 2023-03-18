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
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../common/Loader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      toast.success("Logged In.");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        toast.error("Wrong email or password.");
      } else if (errorCode === "auth/user-not-found") {
        toast.error("This account does not exist");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <Container auth>
        <AuthSection>
          <AuthHeading>Login</AuthHeading>
          <AuthForm onSubmit={loginUser}>
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
    </>
  );
};

export default LoginPage;
