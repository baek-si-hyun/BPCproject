import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../toggleModeSlice";

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
const NavBar = styled.div``;
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
const OptionBar = styled.div``;
const OptionUl = styled.ul`
  display: flex;
  gap: 0.7rem;
  font-size: 1rem;
`;
const OptionItem = styled.li`
  display: flex;
`;
const OptionLink = styled(Link)`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`;
const ToggleModeBTN = styled.button`
  padding: 2rem 0;
  background: none;
  display: flex;
  line-height: 1.5;
  border: none;
  cursor: pointer;
`;
const MaterialIcon = styled.span`
  color: ${(props) => props.theme.textColor};
`;
function Header() {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/">VisualCoin</Link>
        </Logo>
        <NavBar>
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
        </NavBar>
        <OptionBar>
          <OptionUl>
            <OptionItem>
              <OptionLink to="/member">
                <span>로그인</span>
              </OptionLink>
            </OptionItem>
            <OptionItem>
              <ToggleModeBTN onClick={() => handleToggle()}>
                {isDarkMode ? (
                  <MaterialIcon className="material-symbols-outlined">
                    dark_mode
                  </MaterialIcon>
                ) : (
                  <MaterialIcon className="material-symbols-outlined">
                    light_mode
                  </MaterialIcon>
                )}
              </ToggleModeBTN>
            </OptionItem>
            <OptionItem>
              <OptionLink to="/my-page">
                <MaterialIcon className="material-symbols-outlined">
                  account_circle
                </MaterialIcon>
              </OptionLink>
            </OptionItem>
          </OptionUl>
        </OptionBar>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Header;
