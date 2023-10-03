import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num1, getFirstNumber] = useState("");
  const [num2, getSecondNumber] = useState("");
  const [result, displayOutput] = useState("0");

  return (
    <div className="App">
      <header className="App-header">
        <div className="inputDiv">
          <label htmlFor="num1">Enter First Number</label>
          <input
            type="number"
            id="num1"
            onChange={(e) => getFirstNumber(e.target.value)}
            value={num1}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="num2">Enter Second Number</label>
          <input
            type="number"
            id="num2"
            onChange={(e) => getSecondNumber(e.target.value)}
            value={num2}
          />
        </div>
        <div></div>
        <div id="result">{result}</div>
      </header>
    </div>
  );
}

export default App;
