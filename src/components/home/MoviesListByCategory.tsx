import { getMoviesByCategory } from "@/services";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { MovieLists } from "../movie";

export const MoviesListByCategory = async (props: MovieCategoryPage) => {
  const { title, category, seeMorePath } = props;

  const response = await getMoviesByCategory({
    page: "1",
    segments: [category],
  });

  const movies = response?.movies || [];
  const firstTenMovies = movies.slice(0, 10);

  console.log({ title, category, seeMorePath, firstTenMovies });

  return (
    <div className="w-full max-w-screen-xl px-5 lg:px-0 space-y-8 my-10">
      <div className=" flex items-center justify-between ">
        <h3 className="text-foreground text-2xl font-semibold">{title}</h3>

        <Link href={seeMorePath}>
          <Button variant="link">
            See more <ArrowRight />
          </Button>
        </Link>
      </div>
      <MovieLists movies={firstTenMovies} />
    </div>
  );
};
