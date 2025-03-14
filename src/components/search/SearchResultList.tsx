"use client";

import { useFetchDataFromTMDB } from "@/hooks";
import Link from "next/link";
import { Card } from "../ui";
import { SearchNotFound } from "./SearchNotFound";
import { SearchResultCard } from "./SearchResultCard";

type SearchResultListProps = {
  searchValue: string;
  removeSearchValue: () => void;
};

export const SearchResultList = ({
  searchValue,
  removeSearchValue,
}: SearchResultListProps) => {
  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(
    `/search/movie?query=${searchValue}&language=en-US&page=1`
  );

  const movies = data?.results || [];

  const firstFiveMovies = movies.slice(0, 5);

  console.log(firstFiveMovies);

  if (isLoading) return <SearchNotFound />;
  if (!movies.length) return <SearchNotFound />;

  return (
    <div>
      <Card className="search-result p-3 h-[500px] lg:h-auto overflow-y-auto">
        {firstFiveMovies.map((movie, index) => (
          <SearchResultCard
            key={index}
            movie={movie}
            removeSearchValue={removeSearchValue}
          />
        ))}
        <Link
          href={`/search?value=${searchValue}`}
          className="px-4 py-2.5 text-sm font-medium text-foreground"
        >
          See All Result for {searchValue}
        </Link>
      </Card>
    </div>
  );
};
