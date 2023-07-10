import { myPageInvestDatas } from "../../datalist";
import {
  MypageContentContainer,
  MypageContentInner,
  CreateMyPageContentItem,
} from "./common/commonItem";

function MypageInvest() {
  return (
    <MypageContentContainer>
      <MypageContentInner>
        {myPageInvestDatas &&
          myPageInvestDatas.map((data, index) => (
            <CreateMyPageContentItem data={data} index={index} key={index} />
          ))}
      </MypageContentInner>
    </MypageContentContainer>
  );
}

export default MypageInvest;
