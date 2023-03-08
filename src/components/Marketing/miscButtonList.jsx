import React from "react";
import './../../css/button.css';
import BtnMarketing from "./btnMarketing";
import BtnMarketingWrapper from "./btnMarketingWrapper";

export default function MiscButtonList() {
  return  (
    <>
      <BtnMarketingWrapper position='lower'>
        <BtnMarketing to="/" name='back-home' />
        <BtnMarketing name='see-more' />
      </BtnMarketingWrapper>
    </>
  );;
}
