import { optionTimer } from "../../../api/datalist";
import { Select, Option } from "./commonItem";

function FilterTimer() {
  return (
    <Select defaultValue={optionTimer[7].label}>
      {optionTimer.map((list) => (
        <Option key={list.value} value={list.label}>
          {list.label}
        </Option>
      ))}
    </Select>
  );
}

export default FilterTimer;
