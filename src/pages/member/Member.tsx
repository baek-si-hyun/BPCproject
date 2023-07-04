import { useEffect } from "react";
import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MemberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MemberInner = styled.div`
  width: 23rem;
`;
const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 3rem 0 4rem 0;
`;

const Tabs = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 0 3rem 0;
`;
const ActiveBox = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 50%;
  border-bottom: 2px solid ${(props) => props.theme.memberActiveBoxBgColor};
  transform: translateX(${(props) => (props.isActive ? "0" : "100%")});
  transition: transform 0.2s ease-in-out;
  will-change: transform, border;
`;
const Tab = styled.div<{ isActive: boolean }>`
  text-align: center;
  display: flex;
  padding: 1rem 0;
  border-bottom: 2px solid ${(props) => props.theme.memberTabBdColor};
  color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.memberTabTextColor};
  will-change: color, border;
`;

const TabLink = styled(Link)`
  flex: 1;
  font-size: 1.2rem;
`;

function Member() {
  const loginMatch = useMatch(`/member/login`);
  const joinMatch = useMatch(`/member/join`);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/member/login");
  }, []);
  return (
    <MemberContainer>
      <MemberInner>
        <Logo>
          <Link to="/">VisualCoin</Link>
        </Logo>
        <Tabs>
          <ActiveBox isActive={loginMatch !== null} />
          <Tab isActive={loginMatch !== null}>
            <TabLink to="/member/login">Login</TabLink>
          </Tab>
          <Tab isActive={joinMatch !== null}>
            <TabLink to="/member/join">Join</TabLink>
          </Tab>
        </Tabs>
        <Outlet />
      </MemberInner>
    </MemberContainer>
  );
}

export default Member;
