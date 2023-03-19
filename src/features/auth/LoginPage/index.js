import Container from "../../../common/Container/styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { Text } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../config/firebase";
import { toast } from "react-toastify";
import Loader from "../../../common/Loader";
import { addUserToDatabase } from "../authFirebaseFunctions";
import {
  AuthSection,
  AuthHeading,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthMessage,
} from "../AuthStyled";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      toast.success("You're Logged In.");
      navigate("/tasks");
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

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      const { user } = await signInWithPopup(auth, provider);
      setIsLoading(false);
      toast.success("You're Logged In.");
      navigate("/tasks");

      addUserToDatabase(user);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
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
          <AuthButton onClick={signInWithGoogle} google>
            <AiOutlineGoogle size={20} /> Sign In With Google
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
