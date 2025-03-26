import { Category } from "@/components";
import React, { Suspense } from "react";

export const MovieCategory = async ({
  params,
  searchParams,
}: PageRouteParams) => {
  const { segments } = await params;
  const { page = "1" } = await searchParams;
  return (
    <Suspense>
      <Category page={page} segments={segments} />
    </Suspense>
  );
};

export default MovieCategory;
