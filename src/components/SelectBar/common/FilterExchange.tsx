import { SetStateAction, useState } from "react";
import { optionExchange } from "../../../api/datalist";
import { Select, Option } from "./commonItem";
import { fliterExchangeApi } from "../../../api/filterApi";

function FilterExchange() {
  const [selectedValue, setSelectedValue] = useState(optionExchange[0].value);

  const handleSelectChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
    fliterExchangeApi(event.target.value);
  };

  return (
    <Select value={selectedValue} onChange={handleSelectChange}>
      {optionExchange.map((list) => (
        <Option key={list.value} value={list.value}>
          {list.label}
        </Option>
      ))}
    </Select>
  );
}

export default FilterExchange;
