import Hero from "./components/atoms/Hero";
import NavBar from "./components/atoms/NavBar";
import HomeCards from "./components/molecules/HomeCards";
import JobListings from "./components/molecules/JobListings";
import ViewAllJobs from "./components/atoms/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
