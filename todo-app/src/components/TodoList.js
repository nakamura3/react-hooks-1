import TodoItem from './TodoItem';

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
  
export default TodoList;  