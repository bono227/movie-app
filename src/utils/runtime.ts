export const runtimeFormat = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours} цаг ${minutes} минут`;
};
