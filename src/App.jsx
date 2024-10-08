import { useState } from "react";

import Points from "./Points.jsx";
import CardList from "./CardList.jsx";
import "./App.css";

import footballersArray from "./footballers.json";
import shuffleArray from "./shuffleArray.js";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [footballers, setFootballers] = useState(footballersArray);
  const [checkedFootballers, setCheckedFootballers] = useState([]);

  function cardClickHandler(name) {
    const isChecked = checkedFootballers.find(
      (playerName) => playerName === name
    );

    setFootballers(shuffleArray(JSON.stringify(footballers)));

    if (isChecked) {
      setCheckedFootballers([]);
      setScore(0);
    } else {
      setCheckedFootballers([...checkedFootballers, name]);
      setScore(score + 1);
    }
  }

  if (score > bestScore) setBestScore(score);

  return (
    <>
      <div className="game-container">
        <h1>Real Madrid Memory Game</h1>
        <p className="description">
          Get points by clicking on an image but dont click on any more than
          once!
        </p>
        <Points pts={score} bestScore={bestScore}></Points>
        <CardList
          footballers={footballers}
          cardClickHandler={cardClickHandler}
        ></CardList>
      </div>
    </>
  );
}

export default App;
