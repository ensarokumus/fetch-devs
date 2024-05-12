import Hero from "./components/atoms/Hero";
import NavBar from "./components/atoms/NavBar";
import HomeCards from "./components/molecules/HomeCards";
import JobListings from "./components/molecules/JobListings";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
};

export default App;
