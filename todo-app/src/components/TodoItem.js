// TodoItem コンポーネント
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    // イベントとAPIを仲介するハンドラを定義
    const handleToggle = () => toggleTodo(todo.id, todo.done);
    const handleDelete = () => deleteTodo(todo.id);
  
    return (
      <li>
        { todo.content }
        <button onClick={handleToggle} >{ todo.done ? '未完了リストへ' : '完了リストへ' }</button>
        <button onClick={handleDelete} >削除</button>
      </li>
    );
  };
  
export default TodoItem;  