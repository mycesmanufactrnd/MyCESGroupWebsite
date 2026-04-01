"use client";

import AwardHero from "../../components/award/AwardHero";
import AwardList from "../../components/award/AwardList";
import BackToTop from "../../components/award/BackToTop";
import ScrollBullets15 from "../../components/award/ScrollBullets15";

export default function AwardPage() {
  return (
    <>
      <div id="our-story">
        <AwardHero />
      </div>

      <div id="our-story">
        <AwardList />
      </div>

      <div id="backtop">
        <BackToTop />
      </div>

      <ScrollBullets15 />
    </>
  );
}
