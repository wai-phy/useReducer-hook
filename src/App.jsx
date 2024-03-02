import { useReducer } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: state.count - 1 };

    case "plus":
      return { ...state, count: state.count + 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};
function App() {
  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "updateKey", payload: e.target.value })
        }
      />
      <h1>Your Key is - {state.key} </h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
}

export default App;
