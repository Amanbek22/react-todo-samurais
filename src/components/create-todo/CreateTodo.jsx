import { useState } from "react";
import css from "./CreateTodo.module.css";


const CreateTodo = (props) => {
  const [inpValue, setInpValue] = useState("");
  
  const submit = (event) => {
    event.preventDefault();
    props.onAddTodo(inpValue);
    setInpValue("")
  }

  const handleInput = (event) => setInpValue(event.target.value)
  
  return (
    <form onSubmit={submit} className={css.wrapper}>
      <input value={inpValue} onChange={handleInput} type="text" placeholder="Enter some todo" />
      <button>+Add</button>
    </form>
  );
};

export default CreateTodo;
