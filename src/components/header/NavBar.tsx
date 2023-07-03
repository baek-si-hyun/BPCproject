import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div``;
const NavUl = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
`;
const NavItem = styled.li`
  display: flex;
`;
const NavLink = styled(Link)`
  padding: 2rem 0;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <NavUl>
        <NavItem>
          <NavLink to="/">코인 거래소</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/coin-map">코인 맵</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/coin-detail">코인 상세</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/coin-comparison">코인 비교</NavLink>
        </NavItem>
      </NavUl>
    </NavBarContainer>
  );
}

export default NavBar;
