import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
`;

const LoginInput = styled.input`
  height: 48px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease-in-out, background-color 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${(props) => props.theme.inputFocusBdColor};
  }
  &::placeholder {
    color: #c0c0c0;
  }
`;

const LoginButton = styled.button`
  font-family: "Pretendard", sans-serif;
  font-size: 1.5rem;
  border-radius: 5px;
  height: 3.7rem;
  margin: 2rem 0 5rem 0;
  outline: none;
  border: none;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

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
    <LoginForm onSubmit={handleLogin}>
      <InputLabel>Email Address</InputLabel>
      <LoginInput
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <InputLabel>Password</InputLabel>
      <LoginInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <LoginButton type="submit">Login</LoginButton>
    </LoginForm>
  );
}

export default Login;
