import React from "react";
import { Card } from "../ui";

export const SearchLoading = () => {
  return (
    <div>
      <Card className="search-result flex h-32 items-center justify-center">
        Loading...
      </Card>
    </div>
  );
};
