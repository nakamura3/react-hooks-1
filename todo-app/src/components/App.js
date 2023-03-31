import { useTodo } from '../hooks/useTodo';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

function App() {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodo();

  const inCompletedList = todos.filter(todo => ! todo.done);
  const completedList = todos.filter(todo => todo.done);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as ="h1" />
      <TodoAdd addTodo={addTodo} />
      <TodoList title="未完了リスト" as ="h2"
        todoList={inCompletedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoList title="完了リスト" as ="h2"
        todoList={completedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
