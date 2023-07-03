import { SelectWrapperUl, SelectWrapperLi } from "./common/commonItem";
import FilterExchange from "./common/FilterExchange";
import FilterCategory from "./common/FilterCategory";
import FilterMarketCap from "./common/FilterMarketCap";
import FilterChange from "./common/FilterChange";

function SelectMyPageInvest() {
  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <FilterExchange />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterCategory />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterChange />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterMarketCap />
      </SelectWrapperLi>
    </SelectWrapperUl>
  );
}

export default SelectMyPageInvest;
