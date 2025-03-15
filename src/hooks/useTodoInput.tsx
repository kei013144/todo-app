import { useState, ChangeEvent } from 'react';

export default function useTodoInput() {
  const [todoText, setTodoText] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  const resetTodoText = () => setTodoText("");

  return { todoText, onChangeText, resetTodoText };
}