import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Dark from "./darkmode";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className=" p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block dark:bg-zinc-800">
      <div className=" flex flex-col items-center gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img
            src="/Just_Cooking_Logo_2023.png"
            alt="logo"
            className="hidden md:block"
          />
          <img src="/mobile-logo.svg" alt="logo" className=" md:hidden block" />
        </div>
        <ul className=" flex flex-col item-center md:flex-start  gap-8">
          <Link to={"/"} className="flex gap-1 ">
            <Home className="dark:text-white" size={"24"} />
            <span className=" dark:text-zinc-200 font-bold hidden md:block ">
              Home
            </span>
          </Link>
          <Link to={"/favourites"} className="flex gap-1 ">
            <Heart className="dark:text-white" size={"24"} />
            <span className=" dark:text-zinc-200 font-bold hidden md:block ">
              Favourites
            </span>
          </Link>
        </ul>
        <div className=" flex gap-3 md:flex md:flex-wrap">
          <Dark />
          <p className=" hidden content-center text-sm md:block ">Dark Mode?</p>
        </div>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-zinc-200 dark:bg-zinc-900 z-10 p-2 sm:hidden">
      <Link className=" content-center" to={"/"}>
        <Home className="dark:text-white" size={"24"} />
      </Link>
      <Link className=" content-center" to={"/favourites"}>
        <Heart className="dark:text-white" size={"24"} />
      </Link>
      <Dark />
    </div>
  );
};
