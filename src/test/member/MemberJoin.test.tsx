import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Join from "../../pages/member/Join";

describe("<Login />", () => {
  test("email, nickName, password, passwordcheck를 입력하면 join 버튼이 활성화 된다", () => {
    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>
    );
    const email = screen.getByLabelText("Email Address");
    const nickName = screen.getByLabelText("Nick Name");
    const password = screen.getByLabelText("Password");
    const passwordcheck = screen.getByLabelText("Password Check");
    const btn = screen.getByRole("button", { name: "Join Us" });

    expect(btn).toBeDisabled();
    fireEvent.change(email, { target: { value: "user@user.com" } });
    fireEvent.change(nickName, { target: { value: "user" } });
    fireEvent.change(password, { target: { value: "userpassword" } });
    fireEvent.change(passwordcheck, { target: { value: "userpassword" } });
    expect(btn).toBeEnabled();
  });

  test("join us 버튼을 클릭한다", () => {
    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>
    );

    const btn = screen.getByRole("button", { name: "Join Us" });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
  });

  test("showPassword 버튼을 클릭하면 눈 모양 아이콘이 바뀌며 password input의 타입이 바뀐다", () => {
    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>
    );
    const passwordInput = screen.getByLabelText("Password");

    expect(screen.queryByTestId("visibility-password")).toBeNull();
    expect(screen.getByTestId("visibility-off-password")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");

    const visibilityIcons = screen.getAllByRole("button", {
      name: "visibility_off",
    });
    const visibilityIcon = visibilityIcons[0];

    fireEvent.click(visibilityIcon);
    expect(screen.getByTestId("visibility-password")).toBeInTheDocument();
    expect(screen.queryByTestId("visibility-off-password")).toBeNull();
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  test("showPasswordCheck 버튼을 클릭하면 눈 모양 아이콘이 바뀌며 password check input의 타입이 바뀐다", () => {
    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText("Password Check");
    expect(screen.queryByTestId("visibility-password-check")).toBeNull();
    expect(
      screen.getByTestId("visibility-off-password-check")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Password Check")).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");

    const visibilityIcons = screen.getAllByRole("button", {
      name: "visibility_off",
    });
    const visibilityIcon = visibilityIcons[1];
    fireEvent.click(visibilityIcon);
    expect(screen.getByTestId("visibility-password-check")).toBeInTheDocument();
    expect(screen.queryByTestId("visibility-off-password-check")).toBeNull();
    expect(passwordInput).toHaveAttribute("type", "text");
  });
});
