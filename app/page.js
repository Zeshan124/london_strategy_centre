import ProgrammeCommitment from "@/components/ProgrammeCommitment";
import HomePage from "./home/page";
import ProgrammeOverview from "@/components/Programs";
import PerfectFit from "@/components/PerfectFit";

export default function Home() {
  return (
    <>
      <HomePage />
      <ProgrammeOverview />
      <ProgrammeCommitment />
      <PerfectFit />
    </>
  );
}
