import React, { useState, ChangeEvent } from 'react';
import "./App.css"

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1","Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したTodo1","完了したTodo1"]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos];
    newTodos.push(todoText);
    setIncompleteTodos(newTodos);

    setTodoText("");
  };

  const onClickComplete = () => {
    const newTodos = [...completeTodos];
    setCompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeText}></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return(
            <li key = {todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button onClick={onClickComplete}>完了</button>
              <button>削除</button>
            </div>
            </li>);
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo) => {
            return(
            <li key = {todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button>戻す</button>
            </div>
            </li>);
          })}
        </ul>
      </div>
    </>
  )
}

export default App
