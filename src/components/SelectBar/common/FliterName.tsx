import { useState } from "react";
import { renderFilterButton } from "./commonItem";

function FilterName() {
  const [nameFilter, setNameFilter] = useState(0);
  const handleToggleNameFilter = () => {
    setNameFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <>
      {renderFilterButton("name", nameFilter, handleToggleNameFilter)}
    </>
  );
}

export default FilterName;
