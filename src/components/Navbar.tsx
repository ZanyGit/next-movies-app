"use client";

import Link from "next/link";

import {
  HomeIcon,
  GlobeEuropeAfricaIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const Navbar = ({ toggleShowSidebar, showSiderbar }) => {
  const navigationOptions = [
    { name: "Home", href: "/", icon: HomeIcon },
    {
      name: "Discover",
      href: "/discover",
      icon: GlobeEuropeAfricaIcon,
    },
  ];

  return (
    <>
      <nav
        className={`${
          showSiderbar ? "ml-0" : "-ml-72 sm:ml-0"
        } w-72 bg-[#171717] border-r border-[#414141] fixed top-0 left-0 bottom-0 z-50 transition-[margin-left] ease-in-out duration-400 `}
      >
        <div className="h-full w-full relative flex items-center justify-center ">
          <div className="absolute top-10">
            <h2 className=" font-bold text-xl text-white">MOVIES</h2>
          </div>
          <div
            className={`text-white font-bold text-2xl absolute top-0 -right-10 cursor-pointer sm:hidden ${
              !showSiderbar && "hidden"
            }`}
            onClick={() => toggleShowSidebar((val) => !val)}
          >
            <XMarkIcon className="w-10 h-10" />
          </div>
          <ul className=" flex-col space-y-5 items-start flex">
            {navigationOptions.map((nav) => (
              <li>
                <Link
                  className={`text-[#ffffff] text-xl font-medium`}
                  href={nav.href}
                >
                  <div className="flex flex-row items-center justify-center">
                    <nav.icon className="text-[#ffffff] w-6 h-6 mr-2" />
                    {nav.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {showSiderbar && (
        <div
          className="bg-black/50 z-30 fixed inset-0 sm:hidden "
          onClick={() => toggleShowSidebar((val) => !val)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
