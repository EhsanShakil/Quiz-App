import { QuizTypes } from "../Types/Types";

export const FetchApi = async (): Promise<QuizTypes[]> => {
  var response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
  );
  const { results } = await response.json();
  const data: QuizTypes[] = results.map((quiz: QuizTypes) => {
    return {
      question: quiz.question,
      correct_answer: quiz.correct_answer,
      option: quiz.incorrect_answers.concat(quiz.correct_answer).sort(),
    };
  });
  return data;
};
