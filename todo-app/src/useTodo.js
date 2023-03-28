/**
 * TODOデータ管理のためのカスタムフック
 * 
 * TODOデータを状態として逆順で保持する
 * 初回呼び出し時にサーバーからTODOデータを読み出す
 * 状態配列およびステータス反転、追加、削除の api を提供する
 * 追加時の id は一意なものを生成して使用する
 */
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';
import * as api from './todo';

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    api.getAllTodosData()
      .then(data => setTodos([...data].reverse())) // 逆順
  }, []);

  const toggleTodo = (id, done) => {
    const todo = todos.find(item => item.id === id);
    const newTodo = { ...todo, 'done': !done }; // 更新TODO
    api.updateTodoData(id, newTodo)             // サーバー更新
      .then(updatedTodo => {  // ローカル状態の更新
        const newTodos = todos.map(item => (
          item.id === updatedTodo.id ? updatedTodo : item
        ));
        setTodos(newTodos);
      });
  };

  const addTodo = (text) => {
    const newTodo = {
      'id': ulid(),
      'content': text,
      'done': false
    };
    api.addTodoData(newTodo)  // サーバー更新
      .then(addedTodo => {    // ローカル状態の更新
        setTodos([addedTodo, ...todos])
      });
  };

  const deleteTodo = (id) => {
    api.deleteTodoData(id)  // サーバー更新
      .then(deletedId => {  // ローカル状態の更新
        const newTodos = todos.filter(item => item.id !== deletedId);
        setTodos(newTodos);
      });
  };

  return {
    todos,
    toggleTodo,
    addTodo,
    deleteTodo
  };
};
