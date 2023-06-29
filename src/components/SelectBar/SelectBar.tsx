import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SelectExchange from "./SelectExchange";
import SelectCoinDetail from "./SelectCoinDetail";

const SelectBarContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0;
`;
const SelectBarInner = styled.div``;

function SelectBar() {
  const { pathname } = useLocation();
  return (
    <SelectBarContainer>
      <SelectBarInner>
        {pathname === "/" && <SelectExchange />}
        {pathname === "/coin-detail" && <SelectCoinDetail />}
      </SelectBarInner>
    </SelectBarContainer>
  );
}

export default SelectBar;
