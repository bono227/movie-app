import { getMoviesByCategory } from "@/services";

type CategoryProps = {
  page: string;
  segments: string[];
};

export const Category = async (props: CategoryProps) => {
  const { page, segments } = props;

  const response = await getMoviesByCategory({ page, segments });

  if (!response) {
    return <div>No Result Found</div>;
  }

  const { categoryTitle, movies, totalPages } = response;

  return <div>index</div>;
};
