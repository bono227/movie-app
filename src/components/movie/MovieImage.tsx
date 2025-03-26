"use client";

import { cn } from "@/lib";
import Image from "next/legacy/image";
import React from "react";

type MovieImageProps = {
  posterPath: string;
  imageWidth?: string;
  className?: string;
};

export const MovieImage = ({
  posterPath,
  imageWidth = "w300",
  className,
}: MovieImageProps) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;
  const imagePathNotComplete = !posterPath;

  if (imagePathNotComplete) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="absolute inset-0 z-10 bg-primary/30" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={imageUrl}
        alt="poster"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};
