import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  MemberForm,
  MemberInputLabel,
  MemberInput,
  MemberButton,
} from "./common/commonItem";

const JoinPasswordInput = styled(MemberInput)`
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
  will-change: color;
  transform: translate(0, -50%);
  cursor: pointer;
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
    <MemberForm onSubmit={handleLogin}>
      <MemberInputLabel>Email Address</MemberInputLabel>
      <MemberInput
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <MemberInputLabel>Nick Name</MemberInputLabel>
      <MemberInput
        type="text"
        value={nickName}
        onChange={handleNickNameChange}
        placeholder="Nick Name"
      />
      <MemberInputLabel>Password</MemberInputLabel>
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
      <MemberInputLabel>Password Check</MemberInputLabel>
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
      <MemberButton type="submit">Join Us</MemberButton>
    </MemberForm>
  );
}

export default Join;
