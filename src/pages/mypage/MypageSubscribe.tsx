import { myPageSubscribeData } from "../../datalist";
import {
  MypageContentContainer,
  MypageContentInner,
  CreateMyPageContentItem,
} from "./common/commonItem";

const CreateMyInvestItem = () => {
  return (
    <>
      {myPageSubscribeData &&
        myPageSubscribeData.map((data) => CreateMyPageContentItem(data))}
    </>
  );
};
function MypageSubscribe() {
  return (
    <MypageContentContainer>
      <MypageContentInner>{CreateMyInvestItem()}</MypageContentInner>
    </MypageContentContainer>
  );
}

export default MypageSubscribe;
