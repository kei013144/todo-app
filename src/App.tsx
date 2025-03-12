import { useState, ChangeEvent } from 'react';
import "./App.css"

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todo1","Todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したTodo1","完了したTodo1"]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);

    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: number) => {
    const todo: string = incompleteTodos[index];
    const newTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, todo];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index: number) => {
    const todo: string = completeTodos[index];
    const newCompleteTodos = [...completeTodos];
    const newInCompleteTodos = [...incompleteTodos, todo];
    newCompleteTodos.splice(index, 1);
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
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
          {incompleteTodos.map((todo, index) => {
            return(
            <li key = {todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
            </li>);
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo, index) => {
            return(
            <li key = {todo}>
            <div className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
            </li>);
          })}
        </ul>
      </div>
    </>
  )
}

export default App
