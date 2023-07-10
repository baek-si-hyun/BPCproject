import { useState } from "react";
import { RenderFilterButton } from "./commonItem";

function FilterPrice() {
  const [priceFilter, setPriceFilter] = useState(0);
  const handleTogglePriceFilter = () => {
    setPriceFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <RenderFilterButton
      label="price"
      filter={priceFilter}
      value={priceFilter}
      handleToggleFn={handleTogglePriceFilter}
    />
  );
}

export default FilterPrice;
