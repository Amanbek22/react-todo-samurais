import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../../redux/todoSlice";
// @ts-ignore
import css from "./TodoItem.module.css";

interface PropsType {
  id: string;
  text: string;
  status: boolean;
  onEdit: (id: string, t: string) => void;
}

const TodoItem: React.FC<PropsType> = (props) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [inp, setInp] = useState(props.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(todoAction.onDelete(props.id));
  };

  const handleStatus = () => {
    dispatch(todoAction.onStatusChange(props.id));
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };
  const submit = (e: any) => {
    e.preventDefault();
    // props.onEdit(props.id, inp);
    dispatch( todoAction.onEdit({ id: props.id, newText: inp }) )
    setEdit(false);
  };

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit} className={css.formWrapper}>
          <input
            value={inp}
            type="text"
            onChange={(e) => setInp(e.target.value)}
          />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input
            type="checkbox"
            checked={props.status}
            onChange={handleStatus}
          />
          <span className={props.status ? css.todoDone : ""}>{props.text}</span>
        </label>
      )}

      <div>
        <button onClick={handleEdit} className={css.btn}>
          Edit
        </button>
        <button onClick={handleDelete} className={css.btn}>
          Del
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
