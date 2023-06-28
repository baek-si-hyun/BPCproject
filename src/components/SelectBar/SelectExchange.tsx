import { useState } from "react";
import { optionCategory, optionExchange } from "../../datalist";
import {
  Select,
  SelectWrapperUl,
  SelectWrapperLi,
  Option,
  SelectBtn,
} from "./commonStyled";
import styled from "styled-components";

const FilterBtn = styled(SelectBtn)<{ filterNum: number }>`
  background-color: ${(props) =>
    props.filterNum !== 0 && props.theme.btnBgColor};
  color: ${(props) => props.filterNum !== 0 && props.theme.btnTextColor};
`;
const MaterialIcon = styled.span`
  font-size: 16px;
  vertical-align: bottom;
`;
const renderFilterButton = (
  label: string,
  filter: number,
  handleToggleFn: { (): void }
) => {
  return (
    <SelectWrapperLi>
      <FilterBtn onClick={() => handleToggleFn()} filterNum={filter}>
        <span>{label}</span>
        {filter === 1 ? (
          <MaterialIcon className="material-symbols-outlined">
            arrow_drop_down
          </MaterialIcon>
        ) : filter === 2 ? (
          <MaterialIcon className="material-symbols-outlined">
            arrow_drop_up
          </MaterialIcon>
        ) : (
          <></>
        )}
      </FilterBtn>
    </SelectWrapperLi>
  );
};
function SelectExchange() {
  const [subscriptionListFilter, setSubscriptionListFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);
  const [changeFilter, setChangeFilter] = useState(0);
  const [marketcapFilter, setMarketcapFilter] = useState(0);

  const handleToggleSubscriptionFilter = () => {
    setSubscriptionListFilter((choices) => (choices === 1 ? 0 : choices + 1));
  };
  const handleToggleNameFilter = () => {
    setNameFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  const handleTogglePriceFilter = () => {
    setPriceFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  const handleToggleChangeFilter = () => {
    setChangeFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };
  const handleTogglemMarketcapFilter = () => {
    setMarketcapFilter((choices) => (choices === 2 ? 0 : choices + 1));
  };

  return (
    <SelectWrapperUl>
      <SelectWrapperLi>
        <Select id="qwe">
          {optionCategory.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      <SelectWrapperLi>
        <Select>
          {optionExchange.map((list) => (
            <Option key={list.value} value={list.label}>
              {list.label}
            </Option>
          ))}
        </Select>
      </SelectWrapperLi>
      <SelectWrapperLi>
        <FilterBtn
          onClick={() => handleToggleSubscriptionFilter()}
          filterNum={subscriptionListFilter}
        >
          <span>subscription List</span>
        </FilterBtn>
      </SelectWrapperLi>
      {renderFilterButton("name", nameFilter, handleToggleNameFilter)}
      {renderFilterButton("price", priceFilter, handleTogglePriceFilter)}
      {renderFilterButton(
        "amount of change",
        changeFilter,
        handleToggleChangeFilter
      )}
      {renderFilterButton(
        "market cap",
        marketcapFilter,
        handleTogglemMarketcapFilter
      )}
    </SelectWrapperUl>
  );
}

export default SelectExchange;
