import React, { useState } from 'react';

const words = [
  { english: 'cat', polish: 'kot' },
  { english: 'dog', polish: 'pies' },
  { english: 'bird', polish: 'ptak' },
  { english: 'car', polish: 'samochód' },
  { english: 'house', polish: 'dom' },
];

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);

  const currentWord = words[currentWordIndex];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkAnswer = () => {
    if (inputValue.trim().toLowerCase() === currentWord.polish.toLowerCase()) {
      // Jeśli odpowiedź jest poprawna, zwiększ wynik i przejdź do następnego słowa
      setScore(score + 1);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setInputValue('');
    } else {
      // W innym przypadku możesz dodać logikę obsługi błędnej odpowiedzi
      // Na przykład wyświetlić komunikat o błędzie
      alert('Błędna odpowiedź. Spróbuj ponownie!');
    }
  };

  return (
    <div>
      <h1>Angielskie - Polskie Słowo</h1>
      <div>
        <p>Angielskie słowo: {currentWord.english}</p>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={checkAnswer}>Sprawdź</button>
      </div>
      <p>Wynik: {score}</p>
    </div>
  );
}

export default Game;