import ProgrammeCommitment from "@/components/ProgrammeCommitment";
import HomePage from "./home/page";
import ProgrammeOverview from "@/components/Programs";

export default function Home() {
  return (
    <>
      <HomePage />
      <ProgrammeOverview />
      <ProgrammeCommitment />
    </>
  );
}
