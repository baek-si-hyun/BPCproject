import styled from "styled-components";
import { myPageSubscribeData } from "../../datalist";

const MypageSubscribeContainer = styled.div``;
const MypageSubscribeInner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;
const MySubscribeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
`;
const ItemTop = styled.div`
  font-size: 1.3rem;
`;
const ItemBottom = styled.div`
  font-weight: bold;
`;
const Exchange = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
const Coin = styled.div`
  margin-top: 0.3rem;
`;
const Price = styled.div`
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;
const Change = styled.div<{ change: string }>`
  font-size: 1.5rem;
  color: ${(props) =>
    props.change === "RISE"
      ? "#c84a31"
      : props.change === "FALL"
      ? "#1261c4"
      : "#222"};
`;
const MaterialIcons = styled.span`
  vertical-align: middle;
  font-size: 1.5rem;
`;
const CreateMyInvestItem = () => {
  return (
    <>
      {myPageSubscribeData &&
        myPageSubscribeData.map((data) => (
          <MySubscribeItem>
            <ItemTop>
              <Exchange>{data.exchange}</Exchange>
              <Coin>{data.coin}</Coin>
            </ItemTop>
            <ItemBottom>
              <Price>
                ₩{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price>
              <Change change={data.change}>
                {data.change === "EVEN" ? (
                  <MaterialIcons className="material-symbols-outlined">
                    check_indeterminate_small
                  </MaterialIcons>
                ) : data.change === "RISE" ? (
                  <MaterialIcons className="material-symbols-outlined">
                    arrow_drop_up
                  </MaterialIcons>
                ) : data.change === "FALL" ? (
                  <MaterialIcons className="material-symbols-outlined">
                    arrow_drop_down
                  </MaterialIcons>
                ) : (
                  <></>
                )}
                {data.changeRate}%
              </Change>
            </ItemBottom>
          </MySubscribeItem>
        ))}
    </>
  );
};
function MypageSubscribe() {
  return (
    <MypageSubscribeContainer>
      <MypageSubscribeInner>{CreateMyInvestItem()}</MypageSubscribeInner>
    </MypageSubscribeContainer>
  );
}

export default MypageSubscribe;
