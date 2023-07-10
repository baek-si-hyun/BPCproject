import { useState } from "react";
import { RenderFilterButton } from "./commonItem";

function FilterName() {
  const [nameFilter, setNameFilter] = useState(0);
  const handleToggleNameFilter = () => {
    setNameFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  return (
    <RenderFilterButton
      label="name"
      filter={nameFilter}
      value={nameFilter}
      handleToggleFn={handleToggleNameFilter}
    />
  );
}

export default FilterName;
