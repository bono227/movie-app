import React from "react";
import { Card } from "../ui";

export const SearchNotFound = () => {
  return (
    <div>
      <Card className="search-result flex items-center justify-center h-[95px]">
        No Result Found
      </Card>
    </div>
  );
};
