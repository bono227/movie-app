import { fetchDataFromTMDB, getNamesByRole } from "@/utils";

export const getMovieCreditsById = async (movieId: string) => {
  try {
    const { cast, crew } = await fetchDataFromTMDB<MovieCreditsResponse>(
      `/movie/${movieId}/credits?language=en-US`
    );

    const actors = getNamesByRole(cast, "Acting");
    const writers = getNamesByRole(crew, "Writer");
    const directors = getNamesByRole(crew, "Director");

    return {
      actors,
      writers,
      directors,
    };
  } catch (error) {
    console.error(`Failed to fetch the crew data due to ${error}`);
  }
};
