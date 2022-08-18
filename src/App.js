import React, { useState } from "react";

import Square from "./Square";

import "./App.css";

function App() {
  const [squares, setSquares] = useState("", "", "", "", "", "", "", "", "");

  const [player, setPlayer] = useState(true);

  const propVariable = "This is a prop variable";

  return (
    <div>
      <Square
        propVar={propVariable}
        squares={squares}
        setSquare={setSquares}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
