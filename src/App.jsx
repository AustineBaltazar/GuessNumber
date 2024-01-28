import React, { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [hide, setHide] = useState(false);
  const [guessNumber, setGuessNumber] = useState("");
  const [tips, setTips] = useState("");
  const [score, setScore] = useState(0);

  function numberGenerator() {
    const min = 1;
    const max = 20;
    const number = Math.floor(Math.random() * (max - min) + min + 1);
    setRandomNumber(number);
    setHide(false);
    console.log(number);
  }

  function handleInputChange(e) {
    setGuessNumber(e.target.value);
  }

  function checker() {
    if (randomNumber > guessNumber) {
      setTips("go higher");
    } else if (randomNumber < guessNumber) {
      setTips("go lower");
    } else {
      setHide(true);
      setScore(score + 20);
      setTips("");
    }
  }

  function againButton() {}

  return (
    <>
      <div>GUESS THE NUMBER BETWEEN 1 - 20</div>
      <h1>
        {hide ? (
          `Congratulation-!!! you guess the right number (${randomNumber})`
        ) : (
          <h1>?</h1>
        )}
      </h1>
      <h2>{tips}</h2>
      <button onClick={numberGenerator}>GENERATE A RANDOM NUMBER</button>
      <label>
        {" "}
        Guess a Number:
        <input type="number" value={guessNumber} onChange={handleInputChange} />
      </label>
      <button onClick={checker}>Guess the number</button>
      <h1>your score: {score}</h1>
    </>
  );
}

export default App;
