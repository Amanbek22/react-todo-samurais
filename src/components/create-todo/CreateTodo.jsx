import css from "./CreateTodo.module.css";


const CreateTodo = () => {
  return (
    <div className={css.wrapper}>
      <input type="text" placeholder="Enter some todo" />
      <button>+Add</button>
    </div>
  );
};

export default CreateTodo;
