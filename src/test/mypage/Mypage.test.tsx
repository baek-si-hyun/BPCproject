import { fireEvent, render, screen } from "@testing-library/react";
import Mypage from "../../pages/mypage/MyPage";
import { MemoryRouter } from "react-router-dom";

describe("<Mypage />", () => {
  test("userImg가 dom에 존재한다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );
    const userImg = screen.getByAltText("user-img");
    expect(userImg).toBeInTheDocument();
  });

  test("Mypage에 유저 프로필 정보가 출력된다", () => {
    const userData = {
      img:
        "https://blog.kakaocdn.net/dn/bqPYzR/btraWSj02cT/HnIasx6vc09IszobY6Fwe0/img.jpg",
      email: "qortlgus@naver.com",
      name: "qortlgus",
    };
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );
    const userImg = screen.getByAltText("user-img");
    const userEmail = screen.getByText(userData.email);
    const userName = screen.getByText(userData.name);

    expect(userImg).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  test("출력되는 유저 프로필 정보가 실제데이터와 같다", () => {
    const userData = {
      img:
        "https://blog.kakaocdn.net/dn/bqPYzR/btraWSj02cT/HnIasx6vc09IszobY6Fwe0/img.jpg",
      email: "qortlgus@naver.com",
      name: "qortlgus",
    };
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );
    const userImg = screen.getByAltText("user-img") as HTMLImageElement;
    const userEmail = screen.getByText(userData.email);
    const userName = screen.getByText(userData.name);
    const printedObj = {
      img: userImg.src,
      email: userEmail.textContent,
      name: userName.textContent,
    };
    expect(printedObj).toEqual(userData);
  });

  test("Mypage 모든 버튼들이 출력 된다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );
    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(btns.length);
    btns.forEach((btn) => {
      expect(btn).toBeInTheDocument();
    });
  });

  test("Mypage 모든 버튼이 클릭 된다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );
    const btns = screen.getAllByRole("button");
    btns.forEach((btn) => {
      fireEvent.click(btn);
    });
  });

  test("my-invest로 이동하는지 확인한다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: "invest" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/my-page/my-invest");
  });

  test("my-subscribe로 이동하는지 확인한다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: "subscribe" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/my-page/my-subscribe");
  });

  test("my-setting로 이동하는지 확인한다", () => {
    render(
      <MemoryRouter>
        <Mypage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: "setting" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/my-page/my-setting");
  });
});
