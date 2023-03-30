import { useRef } from 'react';

// TodoAdd コンポーネント (非制御コンポーネント実装)
const TodoAdd = ({ addTodo }) => {
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
        <textarea ref={inputRef} />
        <button onClick={handleAdd}>+ TODOを追加</button>
      </>
    );
  };
  
  export default TodoAdd;