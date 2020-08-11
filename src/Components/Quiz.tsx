import React from "react";

type Props = {
  question: string;
  //   options: string[];
};

const Quiz: React.FC<Props> = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h1>Quiz Application</h1>
      <h3>{question}</h3>
    </div>
  );
};

export default Quiz;
