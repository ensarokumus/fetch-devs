import { Outlet } from "react-router-dom";
import NavBar from "../components/atoms/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
