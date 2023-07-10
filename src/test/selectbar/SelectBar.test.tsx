import { render, screen, fireEvent } from "@testing-library/react";
import FilterCategory from "../../components/selectbar/common/FilterCategory";
import FilterExchange from "../../components/selectbar/common/FilterExchange";
import FilterTimer from "../../components/selectbar/common/FilterTimer";
import FilterChange from "../../components/selectbar/common/FilterChange";
import FilterName from "../../components/selectbar/common/FliterName";
import FilterPrice from "../../components/selectbar/common/FilterPrice";
import FilterMarketCap from "../../components/selectbar/common/FilterMarketCap";
import FilterSubscription from "../../components/selectbar/common/FilterSubscription";

describe("<SelectBar />", () => {
  test("FilterCategory 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterCategory />);

    const defaultOption = screen.getByDisplayValue("카테고리");
    expect(defaultOption).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "게임시장" } });

    const selectedOption = screen.getByDisplayValue("게임시장");
    expect(selectedOption).toBeInTheDocument();
  });

  test("FilterExchange 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterExchange />);

    const defaultOption = screen.getByDisplayValue("Binance");
    expect(defaultOption).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "UpBit" } });

    const selectedOption = screen.getByDisplayValue("UpBit");
    expect(selectedOption).toBeInTheDocument();
  });

  test("FilterTimer 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterTimer />);

    const defaultOption = screen.getByDisplayValue("24시간");
    expect(defaultOption).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "10분" } });

    const selectedOption = screen.getByDisplayValue("10분");
    expect(selectedOption).toBeInTheDocument();
  });

  test("FilterChange 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterChange />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    const btnValue1 = btn.getAttribute("value");
    expect(btnValue1).toBe("1");

    fireEvent.click(btn);
    const btnValue2 = btn.getAttribute("value");
    expect(btnValue2).toBe("2");
  });

  test("FilterName 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterName />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    const btnValue1 = btn.getAttribute("value");
    expect(btnValue1).toBe("1");

    fireEvent.click(btn);
    const btnValue2 = btn.getAttribute("value");
    expect(btnValue2).toBe("2");
  });

  test("FilterPrice 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterPrice />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    const btnValue1 = btn.getAttribute("value");
    expect(btnValue1).toBe("1");

    fireEvent.click(btn);
    const btnValue2 = btn.getAttribute("value");
    expect(btnValue2).toBe("2");
  });

  test("FilterMarketCap 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterMarketCap />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    const btnValue1 = btn.getAttribute("value");
    expect(btnValue1).toBe("1");

    fireEvent.click(btn);
    const btnValue2 = btn.getAttribute("value");
    expect(btnValue2).toBe("2");
  });

  test("FilterSubscription 기본값과 변경된 값이 정확하게 출력되는지 확인한다", () => {
    render(<FilterSubscription />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    const btnValue1 = btn.getAttribute("value");
    expect(btnValue1).toBe("1");
  });
});
