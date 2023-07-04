import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MemberForm,
  MemberInputLabel,
  MemberInput,
  MemberButton,
} from "./common/commonItem";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <MemberForm onSubmit={handleLogin}>
      <MemberInputLabel>Email Address</MemberInputLabel>
      <MemberInput
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <MemberInputLabel>Password</MemberInputLabel>
      <MemberInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <MemberButton type="submit">Login</MemberButton>
    </MemberForm>
  );
}

export default Login;
