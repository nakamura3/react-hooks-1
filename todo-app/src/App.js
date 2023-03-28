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

  const inCompletedList = todos.filter(todo => ! todo.done);
  const completedList = todos.filter(todo => todo.done);


  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        { inCompletedList.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button>完了リストへ</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
      <h2>完了TODOリスト</h2>
      <ul>
        { completedList.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button>未完了リストへ</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
