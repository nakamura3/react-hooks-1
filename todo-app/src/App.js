import { useRef } from 'react';
import { useTodo } from './useTodo';

// TodoTitle コンポーネント
const TodoTitle = ({ title, as }) => {
  if (as === 'h1') return <h1>{title}</h1>;
  if (as === 'h2') return <h2>{title}</h2>;
  return <p>{title}</p>;
};

// TodoItem コンポーネント
const TodoItem = ({ todo }) => {
  return (
    <li>
      { todo.content }
      <button>{ todo.done ? '未完了リストへ' : '完了リストへ' }</button>
      <button>削除</button>
    </li>
  );
};

// TodoList コンポーネント
const TodoList = ({ todoList }) => {
  return (
    <ul>
      { todoList.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

// TodoAdd コンポーネント
const TodoAdd = ({ inputRef, handleAdd }) => {
  return (
    <>
      <textarea ref={inputRef} />
      <button onClick={handleAdd}>+ TODOを追加</button>
    </>
  );
};

function App() {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodo();
  const textArea = useRef(null);

  const handleAdd = () => {
    const text = textArea.current.value;
    if (text === '') return;
    addTodo(text);
    textArea.current.value = '';
  };
  const inCompletedList = todos.filter(todo => ! todo.done);
  const completedList = todos.filter(todo => todo.done);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as ="h1" />
      <TodoAdd inputRef={textArea} handleAdd={handleAdd} />

      <TodoTitle title="未完了リスト" as ="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了リスト" as ="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
