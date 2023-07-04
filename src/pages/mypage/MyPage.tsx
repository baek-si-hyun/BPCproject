import styled from "styled-components";
import SelectBar from "../../components/selectbar/SelectBar";
import { userData } from "../../datalist";
import { Link, Outlet, useMatch } from "react-router-dom";

const MypageContainer = styled.div``;
const MypageInner = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileBox = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  will-change: background-color;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  padding: 2rem;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
`;
const UserInformation = styled.div`
  display: flex;
  gap: 2rem;
`;
const UserImgBox = styled.div`
  border-radius: 13px;
`;
const UserImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;
const UserEmailName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const UserEmail = styled.div``;
const UserName = styled.div``;
const UserEdit = styled.div``;
const UserEditBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.btnTextColor};
  will-change: color;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;
const Tabs = styled.div`
  display: flex;
  gap: 1rem;
`;
const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
`;
const TabLink = styled(Link)<{ isActive: boolean }>`
  border-radius: 9px;
  padding: 1rem;
  text-transform: capitalize;
  font-weight: bold;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  background-color: ${(props) =>
    props.isActive ? props.theme.btnBgColor : props.theme.cardColor};
  color: ${(props) => props.isActive && props.theme.btnTextColor};
  will-change: background-color, color;
  &:hover {
    background-color: ${(props) => props.theme.btnHoberBgColor};
  }
`;
const ContentsBox = styled.div`
  margin-top: 1rem;
`;

function Mypage() {
  const investMatch = useMatch(`/my-page/my-invest`);
  const subscribeMatch = useMatch(`/my-page/my-subscribe`);
  const settingMatch = useMatch(`/my-page/my-setting`);

  return (
    <MypageContainer>
      <MypageInner>
        <ProfileBox>
          <UserInformation>
            <UserImgBox>
              <UserImg src={userData.img} />
            </UserImgBox>
            <UserEmailName>
              <UserEmail>{userData.email}</UserEmail>
              <UserName>{userData.name}</UserName>
            </UserEmailName>
          </UserInformation>
          <UserEdit>
            <UserEditBtn>
              <span className="material-symbols-outlined">edit_note</span>
              <span>편집</span>
            </UserEditBtn>
          </UserEdit>
        </ProfileBox>
        <SelectBox>
          <Tabs>
            <Tab isActive={investMatch !== null}>
              <TabLink to="/my-page/my-invest" isActive={investMatch !== null}>
                invest
              </TabLink>
            </Tab>
            <Tab isActive={subscribeMatch !== null}>
              <TabLink
                to="/my-page/my-subscribe"
                isActive={subscribeMatch !== null}
              >
                subscribe
              </TabLink>
            </Tab>
            <Tab isActive={settingMatch !== null}>
              <TabLink
                to="/my-page/my-setting"
                isActive={settingMatch !== null}
              >
                setting
              </TabLink>
            </Tab>
          </Tabs>
          <SelectBar />
        </SelectBox>
        <ContentsBox>
          <Outlet />
        </ContentsBox>
      </MypageInner>
    </MypageContainer>
  );
}

export default Mypage;
