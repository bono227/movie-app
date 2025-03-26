import React from "react";
import { Carousel } from "../carousel";
import { movieCategories } from "@/constants";
import { MoviesListByCategory } from "./MoviesListByCategory";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Carousel />
      {movieCategories.map((category, index) => (
        <MoviesListByCategory key={index} {...category} />
      ))}
    </div>
  );
};
