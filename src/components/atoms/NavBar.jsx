import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-fetchDEVS.png";

const NavBar = () => {
  return (
    <nav className="bg-cyan-900 border-b border-cyan-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="fetchDEVS" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                fetch
              </span>
              <span className="hidden md:block text-teal-500 text-2xl font-bold">
                DEVS
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-cyan-950 bg-teal-500 hover:bg-teal-700 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/jobs"
                  className="text-white hover:bg-teal-700 hover:text-white rounded-md px-3 py-2"
                >
                  Jobs
                </Link>
                <Link
                  to="/add-job.html"
                  className="text-white hover:bg-teal-700 hover:text-white rounded-md px-3 py-2"
                >
                  Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
