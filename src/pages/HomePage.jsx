import Hero from "../components/atoms/Hero";
import HomeCards from "../components/molecules/HomeCards";
import JobListings from "../components/molecules/JobListings";
import ViewAllJobs from "../components/atoms/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
