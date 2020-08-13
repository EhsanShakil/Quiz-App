import React, { useEffect, useState } from "react";
import "./App.css";
import { FetchApi } from "./Api/Api";
import Quiz from "./Components/Quiz";
import { QuizTypes } from "./Types/Types";

function App() {
  const [quiz, setQuiz] = useState<QuizTypes[]>([]);
  let [number, setNumber] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    const data = async () => {
      const questions: QuizTypes[] = await FetchApi(10, "easy");
      console.log(questions);
      setQuiz(questions);
    };
    data();
  }, []);

  if (!quiz.length) {
    return <h1>Loading...</h1>;
  }
  const handleChange = (
    e: React.FormEvent<EventTarget>,
    userAnswer: string
  ) => {
    e.preventDefault();
    console.log(userAnswer);

    const currentQuestion = quiz[number];

    if (userAnswer === currentQuestion.correct_answer) {
      setScore(++score);
    }

    if (number !== quiz.length - 1) {
      setNumber(++number);
    } else {
      alert(
        "Quiz Completed Your Score is: " + score + " Out Of " + quiz.length
      );
      setNumber(0);
      setScore(0);
    }
  };
  return (
    <div className="App">
      <Quiz
        question={quiz[number].question}
        options={quiz[number].option}
        callback={handleChange}
      />
    </div>
  );
}

export default App;
