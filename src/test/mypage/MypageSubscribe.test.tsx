import { render, screen } from "@testing-library/react";
import { IContentItemData } from "../../interface/iMyPage";
import {
  CreateMyPageContentItem,
  MypageContentInner,
} from "../../pages/mypage/common/commonItem";

describe("<MypageSubscribe />", () => {
  test("CreateMyPageContentItem가 입력받은 데이터중 change를 제외하고 출력한다(change는 밑에 따로)", () => {
    const myPageSubscribeData: IContentItemData = {
      exchange: "Binance",
      coin: "Bitcion",
      price: 50000000,
      change: "RISE",
      changeRate: 0.5,
    };
    render(<CreateMyPageContentItem data={myPageSubscribeData} index={1} />);

    expect(screen.getByText(myPageSubscribeData.exchange)).toBeInTheDocument();
    expect(screen.getByText(myPageSubscribeData.coin)).toBeInTheDocument();
    expect(
      screen.getByText(
        `₩${myPageSubscribeData.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${myPageSubscribeData.changeRate}%`)
    ).toBeInTheDocument();
  });

  test("change가 RISE일때 rise-icon을 보여준다", () => {
    const myPageSubscribeData: IContentItemData = {
      exchange: "Binance",
      coin: "Bitcion",
      price: 50000000,
      change: "RISE",
      changeRate: 0.5,
    };
    render(<CreateMyPageContentItem data={myPageSubscribeData} index={1} />);

    expect(screen.getByTestId("rise-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("fall-icon")).toBeNull();
    expect(screen.queryByTestId("even-icon")).toBeNull();
  });

  test("change가 FALL일때 fall-icon을 보여준다", () => {
    const myPageSubscribeData: IContentItemData = {
      exchange: "Binance",
      coin: "Bitcion",
      price: 50000000,
      change: "FALL",
      changeRate: 0.5,
    };
    render(<CreateMyPageContentItem data={myPageSubscribeData} index={1} />);

    expect(screen.queryByTestId("rise-icon")).toBeNull();
    expect(screen.getByTestId("fall-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("even-icon")).toBeNull();
  });

  test("change가 EVEN일때 even-icon을 보여준다", () => {
    const myPageSubscribeData: IContentItemData = {
      exchange: "Binance",
      coin: "Bitcion",
      price: 50000000,
      change: "EVEN",
      changeRate: 0.5,
    };
    render(<CreateMyPageContentItem data={myPageSubscribeData} index={1} />);

    expect(screen.queryByTestId("rise-icon")).toBeNull();
    expect(screen.queryByTestId("fall-icon")).toBeNull();
    expect(screen.getByTestId("even-icon")).toBeInTheDocument();
  });

  test("myPageSubscribeDatas 데이터의 길이만큼 요소를 생성한다", async () => {
    const myPageSubscribeDatas: IContentItemData[] = [
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "RISE",
        changeRate: 0.5,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "RISE",
        changeRate: 5,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "RISE",
        changeRate: 3,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "EVEN",
        changeRate: 0,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "FALL",
        changeRate: 23,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "RISE",
        changeRate: 1,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "RISE",
        changeRate: 203,
      },
      {
        exchange: "Binance",
        coin: "Bitcion",
        price: 50000000,
        change: "FALL",
        changeRate: 12,
      },
    ];
    render(
      <MypageContentInner>
        {myPageSubscribeDatas &&
          myPageSubscribeDatas.map((data, index) => (
            <CreateMyPageContentItem data={data} index={index} />
          ))}
      </MypageContentInner>
    );
    expect(await screen.findAllByRole("listitem")).toHaveLength(
      myPageSubscribeDatas.length
    );
  });
});
