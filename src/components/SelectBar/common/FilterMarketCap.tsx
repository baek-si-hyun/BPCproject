import { useState } from "react";
import { renderFilterButton } from "./commonItem";

function FilterMarketCap() {
  const [marketcapFilter, setMarketcapFilter] = useState(0);
  const handleTogglemMarketcapFilter = () => {
    setMarketcapFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <>
      {renderFilterButton(
        "market cap",
        marketcapFilter,
        handleTogglemMarketcapFilter
      )}
    </>
  );
}

export default FilterMarketCap;
