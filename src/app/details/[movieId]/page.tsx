import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";

type MovieRouteParams = {
  params: {
    movieId: string;
  };
};

const MovieDetails = async ({ params }: MovieRouteParams) => {
  const { movieId } = await params;
  return (
    <Suspense>
      <Button variant="outline">Shadcn Button</Button>
      <h1>MovieDetails</h1>
      <p>ID: {movieId}</p>
    </Suspense>
  );
};

export default MovieDetails;
