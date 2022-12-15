import { useState } from "react";
import css from "./CreateTodo.module.css";
import { useDispatch } from "react-redux";
import { todoAction } from "../../redux/todoSlice";

const CreateTodo = () => {
  const [inpValue, setInpValue] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    // props.onAddTodo(inpValue);
    dispatch( todoAction.onAddTodo(inpValue) )
    setInpValue("");
  };

  const handleInput = (event) => setInpValue(event.target.value);

  return (
    <form onSubmit={submit} className={css.wrapper}>
      <input
        value={inpValue}
        onChange={handleInput}
        type="text"
        placeholder="Enter some todo"
      />
      <button>+Add</button>
    </form>
  );
};

export default CreateTodo;
