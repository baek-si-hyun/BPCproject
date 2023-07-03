import { useState } from "react";
import { renderFilterButton } from "./commonItem";

function FilterChange() {
  const [changeFilter, setChangeFilter] = useState(0);
  const handleToggleChangeFilter = () => {
    setChangeFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <>
      {renderFilterButton(
        "amount of change",
        changeFilter,
        handleToggleChangeFilter
      )}
    </>
  );
}

export default FilterChange;
