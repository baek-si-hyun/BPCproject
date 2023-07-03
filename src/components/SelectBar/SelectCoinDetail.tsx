import { SelectWrapperLi, SelectWrapperUl } from "./common/commonItem";
import FilterExchange from "./common/FilterExchange";
import FilterCategory from "./common/FilterCategory";
import FilterSubscription from "./common/FilterSubscription";
import FilterName from "./common/FliterName";
import FilterPrice from "./common/FilterPrice";
import FilterMarketCap from "./common/FilterMarketCap";

function SelectCoinDetail() {
  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <FilterExchange />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterCategory />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterSubscription />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterName />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterPrice />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterMarketCap />
      </SelectWrapperLi>
    </SelectWrapperUl>
  );
}

export default SelectCoinDetail;
