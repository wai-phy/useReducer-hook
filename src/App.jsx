import { useState } from "react";

function App() {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <h1>Your Key is - {key}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
