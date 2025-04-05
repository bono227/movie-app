import { fetchDataFromTMDB } from "@/utils";

export const getMovieDetailById = async (movieId: string) => {
  try {
    const movieDetail = await fetchDataFromTMDB<MovieDetail>(
      `/movie/${movieId}?language=en-US`
    );
    console.log("movieDetail", movieDetail);
    return movieDetail;
  } catch (error) {
    console.error(`Failed to fetch the movie data due to ${error}`);
  }
};
