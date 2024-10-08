// import React, { useState, useEffect } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import Question from './components/Question/Question';
// import Player from './components/Player/Player';
// import MobilePlayer from './components/MobilePlayer/MobilePlayer';
// import Answer from './components/Answer/Answer';
// import questions from './questions.json';

// function App() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [player1Name, setPlayer1Name] = useState('');
//   const [player2Name, setPlayer2Name] = useState('');
//   const [player1Score, setPlayer1Score] = useState(0);
//   const [player2Score, setPlayer2Score] = useState(0);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [questionsData, setQuestionsData] = useState([]);

//   useEffect(() => {
//     // Load questions from a JSON file or API
//     fetch(questions)
//       .then(response => response.json())
//       .then(data => setQuestionsData(data));
//   }, []);

//   const handlePlayer1NameChange = (e) => {
//     setPlayer1Name(e.target.value);
//   };

//   const handlePlayer2NameChange = (e) => {
//     setPlayer2Name(e.target.value);
//   };

//   const handlePlayer2ScoreChange = (e) => {
//     setPlayer2Score(e.target.value);
//   };

//   const handleAnswerSubmission = (answer) => {
//     setSelectedAnswer(answer);
//     setShowAnswer(true);
//     if (answer === questionsData[currentQuestion].correctAnswer) {
//       setPlayer1Score(player1Score + 1);
//     }
//   };

//   const handleNextQuestion = () => {
//     setShowAnswer(false);
//     setSelectedAnswer(null);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div>
//       <h1>Game Title</h1>
//       <input type="text" value={player1Name} onChange={handlePlayer1NameChange} placeholder="Player 1 Name" />
//       <input type="text" value={player2Name} onChange={handlePlayer2NameChange} placeholder="Player 2 Name" />
//       <input type="number" value={player2Score} onChange={handlePlayer2ScoreChange} placeholder="Player 2 Score" />
//       <Player name={player1Name} score={player1Score} />
//       <Player name={player2Name} score={player2Score} />
//       {questionsData.length > 0 && (
//         <div>
//           <Question questions={questionsData[currentQuestion].question} answer={questionsData[currentQuestion].answer} />
//           <Answer
//             question={questionsData[currentQuestion].question}
//             options={questionsData[currentQuestion].options}
//             correctAnswer={questionsData[currentQuestion].correctAnswer}
//             onAnswerSubmission={handleAnswerSubmission}
//             />
//             {showAnswer && (
//               <div>
//                 <p>
//                   {selectedAnswer === questionsData[currentQuestion].correctAnswer
//                     ? 'Correct!'
//                     : `Sorry, the correct answer is ${questionsData[currentQuestion].correctAnswer}`}
//                 </p>
//                 <button onClick={handleNextQuestion}>Next Question</button>
//               </div>
//             )}
//           </div>
//         )}
//         <MobilePlayer />
//         <QRCodeCanvas value="https://example.com" size={256} />
//       </div>
//     );
//   }
  
//   export default App;
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Make sure this library is installed

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [message, setMessage] = useState(''); // Message for computer screen
  const [answerFeedback, setAnswerFeedback] = useState(''); // Feedback for mobile screen
  const [questions] = useState([
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter'
    },
    {
      question: 'Which of the following authors wrote the famous novel \'To Kill a Mockingbird\'?',
      options: ['F. Scott Fitzgerald', 'Harper Lee', 'Jane Austen', 'J.K. Rowling'],
      correctAnswer: 'Harper Lee'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Ag', 'Au', 'Hg', 'Pb'],
      correctAnswer: 'Au'
    },
    {
      question: 'Who painted the famous painting \'The Starry Night\'?',
      options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet', 'Pablo Picasso'],
      correctAnswer: 'Vincent van Gogh'
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra'
    }
  ]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setMessage(`${playerName}, congratulations! That was the correct answer.`);
      setAnswerFeedback('Correct!');
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setMessage('');
        setAnswerFeedback('');
      }, 2000); // 2-second delay before moving to the next question
    } else {
      setAnswerFeedback('Incorrect. Try again!');
    }
  };

  const handleStartQuiz = () => {
    if (playerName.trim() !== '') {
      setCurrentQuestion(0);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      {!playerName && (
        <div style={{ textAlign: 'center' }}>
          <h2>Enter your name to start the quiz:</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)} // Correctly update the playerName state
            placeholder="Your name"
            style={{ width: '300px', padding: '10px', fontSize: '16px' }} // Ensure wide enough input
          />
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      )}

      {playerName && currentQuestion < questions.length ? (
        <>
          <div style={{
            border: '1px solid black',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            width: '50%',
            textAlign: 'center'
          }}>
            <h2>{questions[currentQuestion].question}</h2>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(option)}>{option}</button>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p>{answerFeedback}</p> {/* Feedback for mobile screen */}
          </div>
        </>
      ) : currentQuestion >= questions.length ? (
        <div style={{
          border: '1px solid black',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          width: '50%',
          textAlign: 'center'
        }}>
          <h2>Quiz finished!</h2>
          <p>Your score is {score} out of {questions.length}.</p>
          <QRCodeCanvas
            value={`Your score is ${score} out of ${questions.length}`}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
          <h2>Thank you for playing, {playerName}!</h2>
        </div>
      ) : null}

      {message && (
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'lightgreen',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h2>{message}</h2> {/* Message on computer screen */}
        </div>
      )}
    </div>
  );
}

export default App;
