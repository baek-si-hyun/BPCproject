import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
`;
const JoinInput = styled.input`
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
const JoinPasswordInput = styled(JoinInput)`
  margin-bottom: 0rem;
  width: 100%;
`;
const JoinPassWordInputBox = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;
const VisibilityIconBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  background: none;
  border: none;
  color: ${(props) => props.theme.textColor};
  transform: translate(0, -50%);
  cursor: pointer;
`;

const JoinButton = styled.button`
  font-size: 1.5rem;
  border-radius: 5px;
  height: 3.7rem;
  margin: 2rem 0 5rem 0;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.btnTextColor};
  /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5); */
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

function Join() {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handleNickNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setNickName(e.target.value);
  };
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const handlePasswordCheckChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordCheck(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePasswordCheck = () => {
    setShowPasswordCheck((prevShowPassword) => !prevShowPassword);
  };
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/member/login");
  };
  return (
    <JoinForm onSubmit={handleLogin}>
      <InputLabel>Email Address</InputLabel>
      <JoinInput
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <InputLabel>Nick Name</InputLabel>
      <JoinInput
        type="text"
        value={nickName}
        onChange={handleNickNameChange}
        placeholder="Nick Name"
      />
      <InputLabel>Password</InputLabel>
      <JoinPassWordInputBox>
        <JoinPasswordInput
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <VisibilityIconBtn type="button" onClick={handleTogglePassword}>
          {showPassword ? (
            <span className="material-symbols-outlined">visibility</span>
          ) : (
            <span className="material-symbols-outlined">visibility_off</span>
          )}
        </VisibilityIconBtn>
      </JoinPassWordInputBox>
      <InputLabel>Password Check</InputLabel>
      <JoinPassWordInputBox>
        <JoinPasswordInput
          type={showPasswordCheck ? "text" : "password"}
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
          placeholder="Password Check"
        />
        <VisibilityIconBtn type="button" onClick={handleTogglePasswordCheck}>
          {showPasswordCheck ? (
            <span className="material-symbols-outlined">visibility</span>
          ) : (
            <span className="material-symbols-outlined">visibility_off</span>
          )}
        </VisibilityIconBtn>
      </JoinPassWordInputBox>
      <JoinButton type="submit">Join Us</JoinButton>
    </JoinForm>
  );
}

export default Join;
