import { useState } from "react";
import { renderFilterButton } from "./commonItem";

function FilterPrice() {
  const [priceFilter, setPriceFilter] = useState(0);
  const handleTogglePriceFilter = () => {
    setPriceFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <>
      {renderFilterButton("price", priceFilter, handleTogglePriceFilter)}
    </>
  );
}

export default FilterPrice;
