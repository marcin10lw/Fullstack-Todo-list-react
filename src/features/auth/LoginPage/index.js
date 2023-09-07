import Container from "../../../common/Container/styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { CredentialsInfo, DescriptionListGroup, Text } from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../config/firebase";
import { toast } from "react-toastify";
import { addUserToDatabase } from "../addUserToDatabase";
import {
  AuthSection,
  AuthHeading,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthMessage,
} from "../AuthStyled";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../authSlice";
import { AiOutlineCopy } from "react-icons/ai";
import { credentialsList } from "./credentialsList";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginUser = async (event) => {
    event.preventDefault();

    dispatch(setIsLoading(true));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setIsLoading(false));
      toast.success("You're Logged In.");
    } catch (error) {
      dispatch(setIsLoading(false));
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        toast.error("Wrong email or password.");
      } else if (errorCode === "auth/user-not-found") {
        toast.error("This account does not exist");
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(setIsLoading(true));

    try {
      const { user } = await signInWithPopup(auth, provider);
      toast.success("You're Logged In.");

      addUserToDatabase(user);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
    }
  };

  const onCredentialCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied do clipboard", { position: "bottom-center" });
    } catch (error) {
      toast.error("Couldn't copy to clipboard", { position: "bottom-center" });
    }
  };

  return (
    <>
      <Container auth>
        <AuthSection>
          <CredentialsInfo>
            <p>To test the application use this credentials:</p>
            <dl>
              {credentialsList.map(({ id, type, content }) => (
                <DescriptionListGroup key={id}>
                  <dt>{type}:</dt>
                  <dd>{content}</dd>
                  <button onClick={() => onCredentialCopy(content)}>
                    <AiOutlineCopy />
                  </button>
                </DescriptionListGroup>
              ))}
            </dl>
          </CredentialsInfo>
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
