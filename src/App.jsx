import React, { useState } from 'react';

function App() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);

    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('He wins!');
    }
  };

  return (
    <div className="game-container">
      <h1>Rock! Paper!, Scissors!</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <p>You chose: {userChoice}</p>
      <p>He chose: {computerChoice}</p>
      <p>{result}</p>
    </div>
  );
}

export default App;