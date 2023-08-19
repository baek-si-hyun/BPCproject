import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  MemberForm,
  MemberInputLabel,
  MemberInput,
  MemberButton,
} from "./common/commonItem";

function Login() {
  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <MemberForm onSubmit={handleSubmit(handleLogin)}>
      <MemberInputLabel htmlFor="login-email-input">
        Email Address
      </MemberInputLabel>
      <MemberInput
        id="login-email-input"
        type="text"
        {...register("email")}
        placeholder="Email Address"
      />
      <MemberInputLabel htmlFor="login-password-input">
        Password
      </MemberInputLabel>
      <MemberInput
        id="login-password-input"
        type="password"
        {...register("password")}
        placeholder="Password"
      />
      <MemberButton
        type="submit"
        disabled={!watch("email") || !watch("password")}
      >
        Login
      </MemberButton>
    </MemberForm>
  );
}

export default Login;
