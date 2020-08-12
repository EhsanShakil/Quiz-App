import React from "react";

type Props = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>) => void;
};

const Quiz: React.FC<Props> = ({ question, options, callback }) => {
  console.log(question, options);
  return (
    <div>
      <h1>Quiz Application</h1>
      <h3>{question}</h3>
      <div>
        {options.map((option: string, index: number) => (
          <div key={index}>
            <label>
              <input type="radio" name="option" value={option} />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button onClick={callback}>Click Me</button>
    </div>
  );
};

export default Quiz;
