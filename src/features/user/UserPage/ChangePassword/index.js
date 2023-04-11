import { useState } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { auth } from "../../../../config/firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { ChangePasswordButton, ChangePasswordInfo, FormText, Input } from "./styled";
import { Button } from "../../../../common/Button";

const ChangePassword = () => {
  const [currentPassowrd, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== newPasswordConfirm) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassowrd
    );

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      setNewPassword("");
      setNewPasswordConfirm("");
      setCurrentPassword("");
      toast.success("Password changed");
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
      <ChangePasswordInfo>
        Minimum password requirements: 8 characters, 1 number, 1 lowercase
        letter, and 1 uppercase letter.
      </ChangePasswordInfo>
      <form onSubmit={onFormSubmit}>
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
        <p>
          <label>
            <FormText>New password</FormText>
            <Input
              value={newPassword}
              onChange={({ target }) => setNewPassword(target.value)}
              placeholder="New password..."
              type="password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
            />
          </label>
        </p>
        <p>
          <label>
            <FormText>Confirm new password</FormText>
            <Input
              value={newPasswordConfirm}
              onChange={({ target }) => setNewPasswordConfirm(target.value)}
              placeholder="Confirm new password..."
              type="password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
            />
          </label>
        </p>
        <ChangePasswordButton disabled={isLoading}>
          Change password
        </ChangePasswordButton>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
