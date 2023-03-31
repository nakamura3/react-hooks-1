import { List } from '@chakra-ui/react';
import TodoTitle from './TodoTitle';
import TodoItem from './TodoItem';

// TodoList コンポーネント

const TodoList = ({ title, as, fontSize, todoList, toggleTodo, deleteTodo }) => {
    return (
      <>
        { todoList.length !== 0 && (
          <>
            <TodoTitle title={title} as ={as} fontSize={fontSize} mt="12" />
            <List w="full">
              { todoList.map(todo => (
                <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              ))}
            </List>
          </>
        )}
      </>
    );
  };
  
export default TodoList;  