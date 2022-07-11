import React from 'react';

export const Complete = (props) => {
  const { completeTodo, backTodo } = props;
  return (
    <li>
      <span>{completeTodo}</span>
      <button onClick={backTodo}>戻す</button>
    </li>
  );
};
