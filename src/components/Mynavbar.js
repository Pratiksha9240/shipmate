import { useLocation } from "react-router-dom";

const Mynavbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="bg-gray border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Shipmate
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {location.pathname === "/" && (
                <button
                  className="bg-indigo py-2 px-4 rounded text-white"
                  aria-current="page"
                >
                  Login Here
                </button>
              )}
            </li>
            <li>
              {location.pathname === "/" && (
                <button className="bg-transparent hover:bg-indigo font-semibold hover:text-white py-2 px-4 border border-indigo hover:border-transparent rounded">
                  Learn more
                </button>
              )}
              {location.pathname === "/details" && (
                <button className="bg-indigo py-2 px-4 rounded text-white hover:bg-dark-violet">
                  Track Shipment
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mynavbar;
