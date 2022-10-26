import { useState } from 'react';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/TodoItem';

const initialState = [
  { text:  "Купить новый мак", status: false, id: 1},
  { text:  "Купить новый мак 16", status: true, id: 2},
  { text:  "Купить новый мак 16 M1", status: false, id: 3},
]
function App() {
  const [todos, setTodos] = useState(initialState);
  

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    console.log(newTodos);
    setTodos(newTodos)
  }

  const onAddTodo = (str) => {
    setTodos([ ...todos, { text: str, status: false, id: Date.now() } ])
  }

  const newTodos = todos.map((item) => {
    return  <TodoItem id={item.id} text={item.text} status={item.status} onDelete={onDelete} />
  })
  return (
    <div className="App">
      <Header todoLength={4} todoDone={2} />
      <div className='content'>
        <CreateTodo onAddTodo={onAddTodo} />
        <div className='content__body'>
          {newTodos}
          {/* <TodoItem text="Купить новый мак" status={false} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
