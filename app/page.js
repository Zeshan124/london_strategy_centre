import ProgrammeCommitment from "@/components/ProgrammeCommitment";
import HomePage from "./home/page";
import ProgrammeOverview from "@/components/Programs";
import PerfectFit from "@/components/PerfectFit";
import WhatYouAllPractice from "@/components/WhatYouAllPractice";
import Restuarants from "@/components/Restuarants";
import Faculty from "@/components/Faculty";
import TestimonialCard from "@/components/TestimonialCard";
import SampleCertificate from "@/components/SampleCertificate";
import JoinMovement from "@/components/JoinMovement";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <HomePage />
      <ProgrammeOverview />
      <ProgrammeCommitment />
      <PerfectFit />
      <WhatYouAllPractice />
      <Restuarants />
      <Faculty />
      <TestimonialCard />
      <SampleCertificate />
      <JoinMovement />
      <ContactSection />
      <Footer />
    </>
  );
}