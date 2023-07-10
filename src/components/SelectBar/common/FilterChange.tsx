import { useState } from "react";
import { RenderFilterButton } from "./commonItem";

function FilterChange() {
  const [changeFilter, setChangeFilter] = useState(0);
  const handleToggleChangeFilter = () => {
    setChangeFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <RenderFilterButton
      label="amount of change"
      filter={changeFilter}
      value={changeFilter}
      handleToggleFn={handleToggleChangeFilter}
    />
  );
}

export default FilterChange;
