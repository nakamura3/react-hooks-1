import { useRef } from 'react';
import { useTodo } from './useTodo';

// TodoTitle コンポーネント
const TodoTitle = ({ title, as }) => {
  if (as === 'h1') return <h1>{title}</h1>;
  if (as === 'h2') return <h2>{title}</h2>;
  return <p>{title}</p>;
};

// TodoItem コンポーネント
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  // イベントとAPIを仲介するハンドラを定義
  const handleToggle = () => toggleTodo(todo.id, todo.done);
  const handleDelete = () => deleteTodo(todo.id);

  return (
    <li>
      { todo.content }
      <button onClick={handleToggle} >{ todo.done ? '未完了リストへ' : '完了リストへ' }</button>
      <button onClick={handleDelete} >削除</button>
    </li>
  );
};

// TodoList コンポーネント
const TodoList = ({ todoList, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      { todoList.map(todo => (
        <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
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
      <TodoList todoList={inCompletedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      <TodoTitle title="完了リスト" as ="h2" />
      <TodoList todoList={completedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
