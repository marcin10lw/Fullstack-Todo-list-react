import { useState } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { FormText, Input } from "../UserStyled";
import {
  EmailAuthProvider,
  deleteUser,
  reauthenticateWithCredential,
} from "firebase/auth";
import { auth } from "../../../../config/firebase";
import { toast } from "react-toastify";
import { Button } from "../../../../common/Button";
import { Backdrop } from "../../../../common/Backdrop";
import { motion } from "framer-motion";
import { PopupForm } from "../../../../common/PopupForm";
import { ButtonsWrapper, DeleteText } from "./styled";

const DeleteAccount = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentPassowrd, setCurrentPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassowrd
    );

    try {
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);

      setCurrentPassword("");
      toast.success("Account has been deleted");
      setIsLoading(false);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong password");
        setIsLoading(false);
      }
    }
  };

  return (
    <Wrapper>
      {showAlert && (
        <Backdrop
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowAlert(false)}
        >
          <PopupForm
            onSubmit={onFormSubmit}
            onClick={(event) => event.stopPropagation()}
          >
            <DeleteText>
              Your account will be permanently deleted. It is irreversible.
            </DeleteText>
            <p>
              <label>
                <FormText>Current password</FormText>
                <Input
                  value={currentPassowrd}
                  onChange={({ target }) => setCurrentPassword(target.value)}
                  placeholder="Current password..."
                  type="password"
                  required
                />
              </label>
            </p>
            <ButtonsWrapper>
              <Button strong remove disabled={isLoading}>
                Delete permanently
              </Button>
              <Button
                type="button"
                strong
                disabled={isLoading}
                onClick={() => setShowAlert(false)}
              >
                Cancel
              </Button>
            </ButtonsWrapper>
          </PopupForm>
        </Backdrop>
      )}
      <Button
        strong
        remove
        disabled={isLoading}
        onClick={() => setShowAlert(true)}
      >
        Delete account
      </Button>
    </Wrapper>
  );
};

export default DeleteAccount;
