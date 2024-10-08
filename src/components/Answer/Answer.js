import React from 'react';

const Answer = ({ question, options, correctAnswer, onAnswerSubmission }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSubmission(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answer;