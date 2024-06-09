import { Heart, Soup, Tag } from "lucide-react";
import React from "react";

export const ReciepeCard = () => {
  return (
    <div className=" flex flex-col rounded-md bg-slate-300 overflow-hidden relative p-3">
      <a href="#" className=" relative h-32">
        <img
          className=" w-full h-full object-cover rounded-md"
          src="/1.jpg"
          alt="reciepe image"
        />
        <div className=" absolute left-2 bottom-2 rounded-md p-1 bg-slate-300 flex justify-center gap-2">
          <Soup size={"16"} />
          <span className=" text-sm">Servings 01</span>
        </div>
        <div className=" absolute top-1 right-2 bg-slate-100 rounded-full cursor-pointer p-1">
          <Heart
            size={"16"}
            className=" hover:fill-red-500 hover:text-red-500 "
          />
        </div>
      </a>
      <div className=" space-y-1 mt-2">
        <h2 className=" font-semibold">Reciepe Name</h2>
        <p className=" text-sm">Reciepe description</p>
      </div>
      <div className=" flex gap-3">
        <div className=" flex gap-2 justify-center mt-2 items-center bg-sky-200 dark:bg-sky-600 px-2 rounded-full text-zinc-700 dark:text-zinc-200">
          <Tag size={"16"} />
          <span>Tags</span>
        </div>
        <div className=" flex gap-2 justify-center mt-2 items-center bg-sky-200 dark:bg-sky-600 px-2 rounded-full text-zinc-700 dark:text-zinc-200">
          <Tag size={"16"} />
          <span>Tags</span>
        </div>
      </div>
    </div>
  );
};
