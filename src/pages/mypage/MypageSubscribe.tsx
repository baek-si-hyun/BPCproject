import { myPageSubscribeDatas } from "../../api/datalist";
import {
  MypageContentContainer,
  MypageContentInner,
  CreateMyPageContentItem,
} from "./common/commonItem";

function MypageSubscribe() {
  return (
    <MypageContentContainer>
      <MypageContentInner>
        {myPageSubscribeDatas &&
          myPageSubscribeDatas.map((data, index) => (
            <CreateMyPageContentItem data={data} index={index} key={index} />
          ))}
      </MypageContentInner>
    </MypageContentContainer>
  );
}

export default MypageSubscribe;
