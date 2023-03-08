import BtnMarketingWrapper from "../btnMarketingWrapper";
import BtnMarketing from "../btnMarketing";

export default function MiscButtonContentList() {
  return (
    <BtnMarketingWrapper position="content" >
      <BtnMarketing name='last' title='上一頁' />
      <BtnMarketing name='next' title='下一頁' />
    </BtnMarketingWrapper>
  );
}
