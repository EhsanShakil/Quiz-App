export const FetchApi = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
  );
  const { results } = await response.json();
  return results;
};
