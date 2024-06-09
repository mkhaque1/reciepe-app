import { Search } from "lucide-react";
import React from "react";
import { ReciepeCard } from "../components/ReciepeCard";

const Home = () => {
  return (
    <div className=" bg-zinc-200 dark:bg-zinc-900 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className=" text-sm md:text-md grow"
              placeholder="what you want to cook today?"
            />
          </label>
        </form>
        <h1 className=" text-3xl md:text-5xl font-bold dark:text-zinc-200 mt-5">
          Recommended Reciepes
        </h1>
        <p className=" text-sm leading-tight text-zinc-500 ml-1 py-3 ">
          Popular items
        </p>
        <div className=" mt-3 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* reciepe card */}
          <ReciepeCard />
          <ReciepeCard />
          <ReciepeCard />
          <ReciepeCard />
          <ReciepeCard />
          <ReciepeCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
