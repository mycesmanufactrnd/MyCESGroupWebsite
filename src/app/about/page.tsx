"use client";

import OurStorySection from "../../components/about/OurStorySection";
import CompanyOverview from "../../components/about/CompanyOverview";
import ScrollBullets2 from "../../components/about/ScrollBullets2";
import SubsidiariesSection from "../../components/about/SubsidiariesSection";
import OurCoreValues from "../../components/about/OurCoreValues";
import OurSpecialties from "../../components/about/OurSpecialties";
import BackToTop from "../../components/subportfolio/BackToTop";



export default function AboutPage() {
  return (
    <>
      <div id="our-story">
        <OurStorySection />
      </div>

      <div id="company-overview">
        <CompanyOverview />
      </div>

      <div id="about-subsi">
        <SubsidiariesSection />
      </div>

      <div id="core-values">
        <OurCoreValues />
      </div>

      <div id="about-specialties">
        <OurSpecialties />
      </div>

      <div id="backtop">
        <BackToTop />
      </div>

      <ScrollBullets2 />
    </>
  );
}