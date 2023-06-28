import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SelectExchange from "./SelectExchange";

const SelectBarContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0;
`;
const SelectBarInner = styled.div``;

function SelectBar() {
  const { pathname } = useLocation();
  return (
    <SelectBarContainer>
      <SelectBarInner>
        {pathname === "/coin-detail" && <SelectExchange />}
      </SelectBarInner>
    </SelectBarContainer>
  );
}

export default SelectBar;
