import { useState } from "react";
import { FilterBtn } from "./commonItem";

function FilterSubscription() {
  const [subscriptionListFilter, setSubscriptionListFilter] = useState(0);

  const handleToggleSubscriptionFilter = () => {
    setSubscriptionListFilter((choices) => (choices === 1 ? 0 : choices + 1));
  };

  return (
    <>
      <FilterBtn
        onClick={() => handleToggleSubscriptionFilter()}
        filterNum={subscriptionListFilter}
      >
        <span>subscription List</span>
      </FilterBtn>
    </>
  );
}

export default FilterSubscription;
