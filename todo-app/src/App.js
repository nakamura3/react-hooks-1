import { useState, useEffect } from 'react';

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(todoDataUrl)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);
  console.log("TODOリスト", todos);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>TODOリスト</h2>
      <ul>
        { todos.map(todo => (
          <li key={todo.id}>
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
