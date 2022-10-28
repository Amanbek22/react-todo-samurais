import css from "./TodoItem.module.css"

const TodoItem = (props) => {
  
  const handleDelete = () => {
    props.onDelete(props.id)
  }

  const handleStatus = () => {
    props.onStatus(props.id);
  }
  return (
    <div className={css.wrapper}>
      <label>
        <input type="checkbox" checked={props.status} onChange={handleStatus} />
        <span className={props.status ? css.todoDone : ''}>{props.text}</span>
      </label>

      <div>
        <button className={css.btn}>Edit</button>
        <button onClick={handleDelete} className={css.btn}>Del</button>
      </div>
    </div>
  )
}

export default TodoItem;