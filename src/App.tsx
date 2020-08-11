import React, { useEffect, useState } from "react";
import "./App.css";
import { FetchApi } from "./Api/Api";
import Quiz from "./Components/Quiz";
import { QuizTypes } from "./Types/Types";

function App() {
  const [quiz, setQuiz] = useState<QuizTypes[]>([]);

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
  return (
    <div className="App">
      <Quiz question={quiz[0].question} options={quiz[0].option} />
    </div>
  );
}

export default App;
