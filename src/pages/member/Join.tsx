import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  MemberForm,
  MemberInputLabel,
  MemberInput,
  MemberButton,
} from "./common/commonItem";
import { useForm } from "react-hook-form";

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
  const { register, watch, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePasswordCheck = () => {
    setShowPasswordCheck((prevShowPassword) => !prevShowPassword);
  };
  const handleJoin = () => {
    navigate("/member/login");
  };
  return (
    <MemberForm onSubmit={handleSubmit(handleJoin)}>
      <MemberInputLabel htmlFor="join-email-input">
        Email Address
      </MemberInputLabel>
      <MemberInput
        id="join-email-input"
        type="email"
        {...register("email")}
        placeholder="Email Address"
      />
      <MemberInputLabel htmlFor="join-nickname-input">
        Nick Name
      </MemberInputLabel>
      <MemberInput
        id="join-nickname-input"
        type="text"
        {...register("nickname")}
        placeholder="Nick Name"
      />
      <MemberInputLabel htmlFor="join-password-input">
        Password
      </MemberInputLabel>
      <JoinPassWordInputBox>
        <JoinPasswordInput
          id="join-password-input"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <VisibilityIconBtn type="button" onClick={handleTogglePassword}>
          {showPassword ? (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-password"
            >
              visibility
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-off-password"
            >
              visibility_off
            </span>
          )}
        </VisibilityIconBtn>
      </JoinPassWordInputBox>
      <MemberInputLabel htmlFor="join-passwordcheck-input">
        Password Check
      </MemberInputLabel>
      <JoinPassWordInputBox>
        <JoinPasswordInput
          id="join-passwordcheck-input"
          type={showPasswordCheck ? "text" : "password"}
          {...register("passwordcheck")}
          placeholder="Password Check"
        />
        <VisibilityIconBtn type="button" onClick={handleTogglePasswordCheck}>
          {showPasswordCheck ? (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-password-check"
            >
              visibility
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              data-testid="visibility-off-password-check"
            >
              visibility_off
            </span>
          )}
        </VisibilityIconBtn>
      </JoinPassWordInputBox>
      <MemberButton
        type="submit"
        disabled={
          !watch("email") ||
          !watch("password") ||
          !watch("nickname") ||
          !watch("passwordCheck")
        }
      >
        Join Us
      </MemberButton>
    </MemberForm>
  );
}

export default Join;
