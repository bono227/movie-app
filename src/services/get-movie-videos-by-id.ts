import { fetchDataFromTMDB } from "@/utils";

export const getMovieVideosById = async (movieId: string) => {
  try {
    const { results } = await fetchDataFromTMDB<MovieVideosResponse>(
      `/movie/${movieId}/videos?language=en-US`
    );

    const movieTrailer = results.find(
      (video) => video.type === "Trailer"
    ) as VideoDetails;

    return movieTrailer;
  } catch (error) {
    console.error(`Failed to fetch the movie data due to ${error}`);
  }
};
