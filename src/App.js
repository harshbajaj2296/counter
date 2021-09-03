import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [minCount, setMinCount] = useState(1);
  const [maxCount, setMaxCount] = useState(1000);

  const handleIncrement = () => {
    if (count < maxCount) setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > minCount) setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <div className="div-style">
        <button className="decrement-button" onClick={handleDecrement}>
          <strong>-</strong>
        </button>
      </div>
      <div className="div-style">
        <input
          className="counter"
          value={count}
          onChange={(e) =>
            e.target.value.length
              ? setCount(
                  maxCount > parseInt(e.target.value)
                    ? parseInt(e.target.value)
                    : maxCount
                )
              : setCount(e.target.value)
          }
        ></input>
      </div>
      <div className="div-style">
        <button className="increment-button" onClick={handleIncrement}>
          <strong>+</strong>
        </button>
      </div>
      <br />
      <div className="div-style">
        Min Counter:
        <input
          className="counter"
          value={minCount}
          onChange={(e) =>
            e.target.value.length
              ? setMinCount(parseInt(e.target.value))
              : setMinCount(e.target.value)
          }
        ></input>
      </div>
      <br />
      <div className="div-style">
        Max Counter:
        <input
          className="counter"
          value={maxCount}
          onChange={(e) =>
            e.target.value.length
              ? setMaxCount(parseInt(e.target.value))
              : setMaxCount(e.target.value)
          }
        ></input>
      </div>
    </div>
  );
}

export default App;