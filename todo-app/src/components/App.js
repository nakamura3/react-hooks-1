import { useTodo } from '../hooks/useTodo';
import { Container } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

function App() {
  const { todos, toggleTodo, addTodo, deleteTodo } = useTodo();

  const inCompletedList = todos.filter(todo => ! todo.done);
  const completedList = todos.filter(todo => todo.done);

  return (
    <Container centerContent p={{ base: '4', md: '6' }} maxWidth="3xl" >
      <TodoTitle title="TODO進捗管理" as ="h1" fontSize={{ base: '2xl', md: '3xl' }} />
      <TodoAdd placeholder="ADD TODO" leftIcon={<AddIcon />} buttonText="TODOを追加"
               addTodo={addTodo} />
      <TodoList title="未完了TODOリスト" as ="h2" fontSize={{ base: 'xl', md: '2xl' }}
        todoList={inCompletedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoList title="完了TODOリスト" as ="h2" fontSize={{ base: 'xl', md: '2xl' }}
        todoList={completedList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;
