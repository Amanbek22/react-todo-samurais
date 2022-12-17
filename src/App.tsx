import React, { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/create-todo/CreateTodo";
import Header from "./components/header/Header";
import TodoItem from "./components/todo-item/TodoItem";
import { useSelector } from "react-redux";

interface TodoType {
  text: string;
  status: boolean;
  id: string;
}

const initialState = JSON.parse(localStorage.getItem("todos") as string) || [];
function App() {
  const [_, setTodos] = useState<TodoType[]>(initialState);
  const todos:TodoType[] = useSelector((state: any) => state.todo.data);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onEdit = (id: string, newText: string) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const newTodos = todos.map((item: TodoType) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        status={item.status}
        onEdit={onEdit}
      />
    );
  });
  const todoCompletes = todos.reduce(
    (akk, item) => akk + Number(item.status),
    0
  );
  return (
    <div className="App">
      <Header todoLength={todos.length} todoDone={todoCompletes} />
      <div className="content">
        <CreateTodo />
        <div className="content__body">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
