import TodoTitle from './TodoTitle';
import TodoItem from './TodoItem';

// TodoList コンポーネント
const TodoList = ({ title, as, fontSize, todoList, toggleTodo, deleteTodo }) => {
    return (
      <>
        { todoList.length !== 0 && (
          <>
            <TodoTitle title={title} as ={as} fontSize={fontSize} mt="12" />
            <ul>
              { todoList.map(todo => (
                <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              ))}
            </ul>
          </>
        )}
      </>
    );
  };
  
export default TodoList;  