import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SelectExchange from "./SelectExchange";
import SelectCoinDetail from "./SelectCoinDetail";
import SelectMyPageInvest from "./SelectMyPageInvest";
import SelectMyPageSubscribe from "./SelectMyPageSubscribe";

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
        {pathname === "/my-page/my-invest" && <SelectMyPageInvest />}
        {pathname === "/my-page/my-subscribe" && <SelectMyPageSubscribe />}
      </SelectBarInner>
    </SelectBarContainer>
  );
}

export default SelectBar;
