import { myPageInvestData } from "../../datalist";
import {
  MypageContentContainer,
  MypageContentInner,
  CreateMyPageContentItem,
} from "./common/commonItem";

const CreateMyInvestItem = () => {
  return (
    <>
      {myPageInvestData &&
        myPageInvestData.map((data) => CreateMyPageContentItem(data))}
    </>
  );
};

function MypageInvest() {
  return (
    <MypageContentContainer>
      <MypageContentInner>{CreateMyInvestItem()}</MypageContentInner>
    </MypageContentContainer>
  );
}

export default MypageInvest;
