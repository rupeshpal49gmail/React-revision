import React from "react";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    console.log(`Clicked ${count}`);
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1>Hello React</h1>
        <h2 id="counter">Counter value : {count}</h2>
        <button onClick={addValue} id="btn1">
          Add Value
        </button>
        <br />
        <button onClick={removeValue} id="btn2">
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
