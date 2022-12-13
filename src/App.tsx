import React, { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/create-todo/CreateTodo";
import Header from "./components/header/Header";
import TodoItem from "./components/todo-item/TodoItem";

interface TodoType {
  text: string;
  status: boolean;
  id: string
}

const initialState = JSON.parse(localStorage.getItem("todos") as string) || [];
function App() {
  const [todos, setTodos] = useState<TodoType[]>(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id: string) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const onAddTodo = (str: string) => {
    setTodos([...todos, { text: str, status: false, id: Date.now().toString() }]);
  };

  const onStatusChange = (id: string) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const onEdit = (id:string, newText:string) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const newTodos = todos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        status={item.status}
        onDelete={onDelete}
        onStatus={onStatusChange}
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
        <CreateTodo onAddTodo={onAddTodo} />
        <div className="content__body">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
