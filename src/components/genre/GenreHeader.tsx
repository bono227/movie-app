"use client";

import React from "react";

type GenreHeaderProps = {
  title: string;
};

export const GenreHeader = ({ title }: GenreHeaderProps) => {
  return (
    <div className="text-foreground space-y-1">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="">See lists of movies by genre</p>
    </div>
  );
};
