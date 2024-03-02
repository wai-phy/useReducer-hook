import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(undefined);
  const [id, setId] = useState("");
  const [error, setError] = useState(false);

  const getData = async (e) => {
    e.preventDefault();
    if (id < 1) {
      setError(true);
      setId("");
      return;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    setError(false);
    setTodo(data);
    setId("");
  };
  return (
    <section>
      <form onSubmit={getData}>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && (
          <span className="error-msg">
            Please Enter A Valid Id (Example: 1,2,3, etc..)
          </span>
        )}
        {todo &&
         <div>
          <h1> title - {todo.title}</h1>
         <h2> UserId - {todo.userId}</h2>
         <h1> Id - {todo.id}</h1>
         <h1> Id - {todo.completed ? (<span className="true">Completed</span>) : (<span className="false">Incompleted</span>)}</h1>
         </div>
        }
      </div>
    </section>
  );
}

export default App;
