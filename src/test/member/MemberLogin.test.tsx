import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../../pages/member/Login";

describe("<Login />", () => {
  test("email과 password를 입력하면 Login 버튼이 활성화 된다", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const email = screen.getByLabelText("Email Address");
    const password = screen.getByLabelText("Password");
    const btn = screen.getByRole("button");

    expect(btn).toBeDisabled();
    fireEvent.change(email, { target: { value: "user@user.com" } });
    fireEvent.change(password, { target: { value: "userpassword" } });
    expect(btn).toBeEnabled();
  });

  test("login 버튼을 클릭한다", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
  });
});
