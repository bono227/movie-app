type MovieCredits = {
  name: string;
  job?: string;
  known_for_department?: string;
}[];

type JobType = "Writer" | "Director" | "Acting";

export const getNamesByRole = (credits: MovieCredits, role: JobType) => {
  const filteredNames = credits
    .filter((credit) => credit.job || credit.known_for_department === role)
    .map((credit) => credit.name);

  const firstFiveNames = filteredNames.slice(0, 5);
  return firstFiveNames;
};
