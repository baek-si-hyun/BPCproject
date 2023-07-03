import { optionExchange } from "../../../datalist";
import { Select, Option } from "./commonItem";

function FilterExchange() {
  return (
    <Select defaultValue={optionExchange[0].value}>
      {optionExchange.map((list) => (
        <Option key={list.value} value={list.label}>
          {list.label}
        </Option>
      ))}
    </Select>
  );
}

export default FilterExchange;
