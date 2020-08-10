export const FetchApi = async (totalQuiz: number, level: string) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuiz}&category=18&difficulty=${level}&type=multiple`
  );
  const { results } = await response.json();
  return results;
};
