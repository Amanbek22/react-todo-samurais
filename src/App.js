import { useEffect, useState } from 'react';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/TodoItem';

const initialState = JSON.parse(localStorage.getItem('todos')) || []
function App() {
  const [todos, setTodos] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const onAddTodo = (str) => {
    setTodos([ ...todos, { text: str, status: false, id: Date.now() } ])
  }

  const onStatusChange = (id) => {
    const newArr = todos.map( (todo) => {
      if(todo.id === id) {
        return {...todo, status: !todo.status}
      }
      return todo
    })
    setTodos(newArr)
  }

  const newTodos = todos.map((item) => {
    return  <TodoItem key={item.id} id={item.id} text={item.text} status={item.status} onDelete={onDelete} onStatus={onStatusChange} />
  })
  const todoCompletes = todos.reduce( (akk, item) =>  akk + Number(item.status) , 0)
  return (
    <div className="App">
      <Header todoLength={todos.length} todoDone={todoCompletes} />
      <div className='content'>
        <CreateTodo onAddTodo={onAddTodo} />
        <div className='content__body'>
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
