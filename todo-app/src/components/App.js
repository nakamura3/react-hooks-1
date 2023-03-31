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
      <TodoTitle title="TODO進捗管理" as ="h1" fontSize={{ base: '2xl', md: '3xl' }} />
      <TodoAdd addTodo={addTodo} />
      <TodoList title="未完了リスト" as ="h2" fontSize={{ base: 'xl', md: '2xl' }}
        todoList={inCompletedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoList title="完了リスト" as ="h2" fontSize={{ base: 'xl', md: '2xl' }}
        todoList={completedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
