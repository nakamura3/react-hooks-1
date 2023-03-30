// TodoAdd コンポーネント
const TodoAdd = ({ inputRef, handleAdd }) => {
    return (
      <>
        <textarea ref={inputRef} />
        <button onClick={handleAdd}>+ TODOを追加</button>
      </>
    );
  };
  
  export default TodoAdd;