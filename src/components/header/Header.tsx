import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import SelectBar from "../selectbar/SelectBar";
import NavBar from "./NavBar";
import OptionBar from "./OptionBar";

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-weight: 600;
`;
const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/">VisualCoin</Link>
        </Logo>
        <NavBar />
        <OptionBar />
      </HeaderContainer>
      {(pathname === "/" || pathname === "/coin-detail") && <SelectBar />}
      <Outlet />
    </>
  );
}

export default Header;
