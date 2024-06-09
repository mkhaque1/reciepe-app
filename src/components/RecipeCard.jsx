import { Heart, Soup, Tag } from "lucide-react";
import React from "react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

export const RecipeCard = ({ recipe, badge, bg }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  return (
    <div
      className={`flex flex-col rounded-md bg-slate-300 ${badge} overflow-hidden relative p-3`}
    >
      <a href="#" className=" relative h-32">
        <img
          className=" w-full h-full object-cover rounded-md"
          src={recipe.image}
          alt="reciepe image"
        />
        <div className=" absolute left-2 bottom-2 rounded-md p-1 bg-slate-300 flex justify-center gap-2">
          <Soup size={"16"} />
          <span className=" text-sm">Servings {recipe.yield}</span>
        </div>
        <div className=" absolute top-1 right-2 bg-slate-100 rounded-full cursor-pointer p-1">
          <Heart
            size={"16"}
            className=" hover:fill-red-500 hover:text-red-500 "
          />
        </div>
      </a>
      <div className=" space-y-1 mt-2">
        <h2 className=" font-semibold">{recipe.label}</h2>
        <p className=" text-sm">
          {recipe.cuisineType[0].charAt(0).toUpperCase() +
            recipe.cuisineType[0].slice(1)}
        </p>
      </div>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <Tag size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
