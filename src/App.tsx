import React, { useEffect, useState } from "react";
import "./App.css";
import { FetchApi } from "./Api/Api";
import Quiz from "./Components/Quiz";
import { QuizTypes } from "./Types/Types";

function App() {
  const [quiz, setQuiz] = useState<QuizTypes[]>([]);
  let [number, setNumber] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  useEffect(() => {
    const data = async () => {
      const questions: QuizTypes[] = await FetchApi(5, "easy");
      console.log(questions);
      setQuiz(questions);
    };
    data();
  }, []);

  if (!quiz.length) {
    return <h1 className="loading">Loading...</h1>;
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
      setResult(true);
    }
  };

  if (result) {
    return (
      <div className="result">
        <h1>Result</h1>
        <p>
          Your total score is {score} out of {quiz.length}
        </p>
      </div>
    );
  }
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
