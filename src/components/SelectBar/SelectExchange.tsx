import { SelectWrapperUl, SelectWrapperLi } from "./common/commonItem";
import FilterCategory from "./common/FilterCategory";
import FilterSubscription from "./common/FilterSubscription";
import FilterName from "./common/FliterName";
import FilterPrice from "./common/FilterPrice";
import FilterMarketCap from "./common/FilterMarketCap";
import FilterChange from "./common/FilterChange";
import FilterTimer from "./common/FilterTimer";

function SelectExchange() {
  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <FilterCategory />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterTimer />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterSubscription />
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterChange />
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

export default SelectExchange;
