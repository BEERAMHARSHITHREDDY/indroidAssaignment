import React from 'react';

const Question = ({ question, answer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default Question;