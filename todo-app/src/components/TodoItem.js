// TodoItem コンポーネント
import { ListItem, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    // イベントとAPIを仲介するハンドラを定義
    const handleToggle = () => toggleTodo(todo.id, todo.done);
    const handleDelete = () => deleteTodo(todo.id);

    const label = todo.done ? '未完了リストへ' : '完了リストへ';
    const setColorScheme = todo.done ? 'pink' : 'blue';
  
    return (
      <ListItem borderWidth="1px" p="4" mt="4" bg="white"
                borderRadius="md" borderColor="gray.300">
        <Text mb="6">{todo.content}</Text>
        <Flex align="center" justify="flex-end">
          <Button colorScheme={setColorScheme} variant="outline" size="sm"
                  onClick={handleToggle} >
            {label}
          </Button>
          <IconButton icon={<DeleteIcon />} variant="unstyled" aria-label="delete"
                  onClick={handleDelete} />
        </Flex>
      </ListItem>
    );
  };
  
export default TodoItem;  