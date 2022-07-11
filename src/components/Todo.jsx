import React from 'react';

export const Todo = (props) => {
  const { todo, deleteTodo, completeTodo } = props;
  return (
    <li>
      <div>
        <span>{todo}</span>
        <button onClick={completeTodo}>完了</button>
        <button onClick={deleteTodo}>削除</button>
      </div>
    </li>
  );
}
