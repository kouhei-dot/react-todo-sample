import React, { useEffect } from 'react';
import './App.css';
import { Complete } from './components/Complete';
import { Todo } from './components/Todo';
import { Alert } from './components/Alert';

export const App = () => {
  // 状態管理
  const [text, setText] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  const [compList, setCompList] = React.useState([]);

  /* Todo追加処理 */
  const addTodo = () => {
    if (text === '' || text === null || text === undefined) return;
    if (todoList.length === 5) {
      setMsg('TODOは5つ以内です。');
      return;
    }
    setTodoList([...todoList, text]);
    setMsg('');
    setText('');
  };

  /* Todo削除処理 */
  const deleteTodo = (idx) => setTodoList(todoList.filter((_, i) => i !== idx));


  /* Todo完了処理 */
  const completeTodo = (idx) => {
    setCompList([...compList, todoList[idx]]);
    deleteTodo(idx);
  };

  /* Todo差し戻し処理 */
  const backTodo = (idx) => {
    setTodoList([...todoList, compList[idx]]);
    setCompList(compList.filter((_, i) => i !== idx));
  };

  useEffect(() => {
    // エラーメッセージのクリア処理
    if (todoList.length < 5) setMsg('');
  }, [todoList]);

  return (
    <main className='w-60'>
      {msg && <Alert>{msg}</Alert>}
      <div className="flex bg-primary round">
        <input type="text" placeholder="TODOを入力" value={text} onChange={(ev) => setText(ev.target.value)} />
        <button id="add-btn" onClick={addTodo}>追加</button>
      </div>

      <div className="bg-secondary round">
        <h2>未完了のTODO</h2>
        <ul>
          {todoList.map((v, i) => <Todo key={i} todo={v} deleteTodo={() => deleteTodo(i)} completeTodo={() => completeTodo(i)} />)}
        </ul>
      </div>

      <div className="bg-accent round">
        <h2>完了したTODO</h2>
        <ul>
          {compList.map((v, i) => <Complete key={i} completeTodo={v} backTodo={() => backTodo(i)} />)}
        </ul>
      </div>
    </main>
  );
}
