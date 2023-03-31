import { useRef } from 'react';
import { Textarea, Button } from '@chakra-ui/react';

// TodoAdd コンポーネント (非制御コンポーネント実装)
const TodoAdd = ({ placeholder, leftIcon, buttonText, addTodo }) => {
  const inputRef = useRef(null);

  // イベントとAPIを仲介するハンドラを定義
  const handleAdd = () => {
    const text = inputRef.current.value;
    if (text === '') return;
    addTodo(text);
    inputRef.current.value = '';
  };

  return (
      <>
        <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400"
                  ref={inputRef} />
        <Button onClick={handleAdd}
                colorScheme="blue" leftIcon={leftIcon} mt="8">
          {buttonText}
        </Button>
      </>
    );
  };
  
  export default TodoAdd;