import Hero from "./components/atoms/Hero";
import NavBar from "./components/atoms/NavBar";
import HomeCards from "./components/molecules/HomeCards";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
    </>
  );
};

export default App;
