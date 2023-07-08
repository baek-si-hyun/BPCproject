import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Member from "../../pages/member/Member";

describe("<Member />", () => {
  test("VisualCoin 로고 클릭시 메인 화면으로 이동한다", () => {
    render(
      <MemoryRouter>
        <Member />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link", { name: "VisualCoin" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  test("Login을 클릭하면 메인 화면으로 이동", () => {
    render(
      <MemoryRouter>
        <Member />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Login" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/member/login");
  });

  test("Join을 클릭하면 Login 화면으로 이동", () => {
    render(
      <MemoryRouter>
        <Member />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Join" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/member/join");
  });
});
