import React, { useEffect, useState } from "react";
import { loadTodos } from "./api";

type Todo = {
  id: string;
  task: string;
  done: boolean;
  setDone: (done: boolean) => void;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const _todos = loadTodos();

    setTodos(
      _todos.map((x) => ({
        id: x.id,
        task: x.task,
        done: x.done,
        setDone: (done: boolean) => updateTask(x.id, done),
      })),
    );
  }, []);

  function updateTask(taskId: string, done: boolean) {
    setTodos(todos.map((x) => (x.id === taskId ? { ...x, done } : x)));
  }

  return (
    <div>
      10/10 app deffo works 100%
      <br />
      <br />
      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            <div>
              {x.task} {x.done ? "(done)" : ""}
            </div>
            {x.done ? (
              <button onClick={() => x.setDone(false)}>Undo</button>
            ) : (
              <button onClick={() => x.setDone(true)}>Done</button>
            )}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
