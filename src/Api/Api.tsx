import { QuizTypes } from "../Types/Types";

export const FetchApi = async (
  totalQuiz: number,
  level: string
): Promise<QuizTypes[]> => {
  var response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuiz}&category=18&difficulty=${level}&type=multiple`
  );
  const { results } = await response.json();
  const data = results.map((quiz: QuizTypes) => {
    return {
      correct_answer: quiz.correct_answer,
      incorrect_answers: quiz.incorrect_answers,
      option: quiz.incorrect_answers.concat(quiz.correct_answer),
    };
  });
  return data;
};
