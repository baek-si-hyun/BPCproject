import { optionCategory } from "../../../datalist";
import { Select, Option } from "./commonItem";

function FilterCategory() {
  return (
    <Select defaultValue={optionCategory[0].value}>
      {optionCategory.map((list) => (
        <Option key={list.value} value={list.label}>
          {list.label}
        </Option>
      ))}
    </Select>
  );
}

export default FilterCategory;
