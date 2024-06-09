import React from "react";

const fav = false;

const Favourite = () => {
  return (
    <div className=" bg-slate-200 flex-1 p-10 min-h-screen">
      <p className=" text-2xl md:text-5xl font-bold ">My Favourites</p>

      {!fav && (
        <div className=" h-[80vh] flex flex-col gap-4 items-center">
          <img src="/404.svg" className=" h-3/4" alt="404 page" />
        </div>
      )}
    </div>
  );
};

export default Favourite;
