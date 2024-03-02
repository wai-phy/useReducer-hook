import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect((_) => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setTodos(data);
  };
  return (
    <section>
      <h1>Hello World</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {/* <th>User ID</th> */}
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              {/* <td>{todo.userId}</td> */}
              <td>{todo.title}</td>
              <td>{todo.completed ? (<p>Completed</p>) : (<p className="false">Incompleted</p>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
