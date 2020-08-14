import React, { useState } from "react";
import "../App.css";
type Props = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>, userAnswer: string) => void;
};

const Quiz: React.FC<Props> = ({ question, options, callback }) => {
  let [userAnswer, setUserAnswer] = useState("");

  const handleChange = (e: any) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz Application</h1>
      <h3>{question}</h3>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userAnswer)}
      >
        <div>
          {options.map((option: string, index: number) => (
            <div key={index}>
              <label className="options">
                <input
                  required
                  type="radio"
                  name="option"
                  value={option}
                  checked={userAnswer === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        <button className="button">Click Me</button>
      </form>
    </div>
  );
};

export default Quiz;
