import React, { useState } from 'react';

const wordSets = {
  basic: [
    { english: 'cat', polish: 'kot' },
    { english: 'dog', polish: 'pies' },
    { english: 'bird', polish: 'ptak' },
    { english: 'car', polish: 'samochód' },
    { english: 'house', polish: 'dom' },
  ],
  body: [
    { english: 'head', polish: 'głowa' },
    { english: 'hand', polish: 'ręka' },
    { english: 'leg', polish: 'noga' },
    { english: 'eye', polish: 'oko' },
    { english: 'ear', polish: 'ucho' },
    { english: 'toe', polish: 'palec stopy' },
    { english: 'finger', polish: 'palec ręki' },
    { english: 'tongue', polish: 'język' },
    { english: 'neck', polish: 'szyja' },
    { english: 'tooth', polish: 'ząb' },
    { english: 'face', polish: 'twarz' },
    { english: 'stomach', polish: 'brzuch' },
    { english: 'hair', polish: 'włosy' },
    { english: 'back', polish: 'plecy' },
    { english: 'mouth', polish: 'usta' },
    { english: 'lip', polish: 'warga' },
    { english: 'thigh', polish: 'udo' },
  ]
};
  

function Game() {
  const [currentCategory, setCurrentCategory] = useState('basic');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [isEnglishToPolish, setIsEnglishToPolish] = useState(true);
  // const [showAnswer, setShowAnswer] = useState(false);

  const handleCategoryChange = (event) => {
    setCurrentCategory(event.target.value);
    setCurrentWordIndex(0);
    setScore(0);
    // setShowAnswer(false);
  }

  const toggleTranslationMode = () => {
    setIsEnglishToPolish(!isEnglishToPolish);
    setCurrentWordIndex(0);
    setScore(0);
    // setShowAnswer(false);
  }

  // Sprawdź odpowiedź
  const checkAnswer = () => {
    const currentWord = wordSets[currentCategory][currentWordIndex];
    const correctAnswer = isEnglishToPolish
      ? currentWord.polish.toLowerCase()
      : currentWord.english.toLowerCase();

    if (inputValue.trim().toLowerCase() === correctAnswer) {
      setScore(score + 1);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordSets[currentCategory].length);
      setInputValue('');
      // setShowAnswer(false);
    } else {
      alert('Błędna odpowiedź. Spróbuj ponownie!');
    }
  };

  // Pomiń słowo (sprawdź odpowiedź bez zmiany punktacji)
  // const skipAnswer = () => {
  //   setShowAnswer(true); // Pokaż odpowiedź
  //   setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordSets[currentCategory].length);
  //   setInputValue('');
  // };

  // klawisz enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  // Obsługa zmiany wartości inputa
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // ustawienie kategorii iii
  // Dodajemy sprawdzenie, czy kategoria zawiera słowa
  const currentWordSet = wordSets[currentCategory];
  const currentWord = currentWordSet && currentWordSet.length > 0
    ? (isEnglishToPolish
        ? currentWordSet[currentWordIndex].english
        : currentWordSet[currentWordIndex].polish)
    : 'Brak słów w tej kategorii';

  // const correctAnswer = currentWordSet && currentWordSet.length > 0
  //   ? (isEnglishToPolish
  //       ? currentWordSet[currentWordIndex].polish
  //       : currentWordSet[currentWordIndex].english)
  //   : '';

  return (
    <div>
      
      <h1>{isEnglishToPolish ? 'Angielski -> Polski' : 'Polski -> Angielski'}</h1>

      <div>

        <label>
          Wybierz kategorię:
          <select value={currentCategory} onChange={handleCategoryChange}>
            <option value="basic">Podstawowe</option>
            <option value="body">Ciało człowieka</option>
          </select>
        </label>

        <p>{isEnglishToPolish ? 'Angielskie słowo' : 'Polskie słowo'}: {currentWord}</p>
        
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Obsługa klawisza Enter
        />
        
        <button onClick={checkAnswer} disabled={!currentWordSet || currentWordSet.length === 0}>
          Sprawdź
        </button>
        
        {/* <button onClick={skipAnswer} disabled={!currentWordSet || currentWordSet.length === 0}>
          Sprawdź odpowiedź (Pomiń)
        </button> */}

        {/* {showAnswer && <p>Poprawna odpowiedź: {correctAnswer}</p>} */}

      </div>

      <button onClick={toggleTranslationMode}>
        Zmień tryb: {isEnglishToPolish ? 'Polski -> Angielski' : 'Angielski -> Polski'}
      </button>

      <p>Wynik: {score}</p>

    </div>
  );
}

export default Game;