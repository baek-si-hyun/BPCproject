import { useState } from "react";
import { RenderFilterButton } from "./commonItem";

function FilterMarketCap() {
  const [marketcapFilter, setMarketcapFilter] = useState(0);
  const handleTogglemMarketcapFilter = () => {
    setMarketcapFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <RenderFilterButton
      label="market cap"
      filter={marketcapFilter}
      value={marketcapFilter}
      handleToggleFn={handleTogglemMarketcapFilter}
    />
  );
}

export default FilterMarketCap;
