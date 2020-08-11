import React from "react";

type Props = {
  question: string;
  options: string[];
};

const Quiz: React.FC<Props> = ({ question, options }) => {
  console.log(question, options);
  return (
    <div>
      <h1>Quiz Application</h1>
      <h3>{question}</h3>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input type="radio" name="option" value={option} />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
