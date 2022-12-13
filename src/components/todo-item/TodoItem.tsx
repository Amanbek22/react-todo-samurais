import React, { useState } from "react";
// @ts-ignore
import css from "./TodoItem.module.css";

interface PropsType {
  id: string;
  text: string;
  status: boolean;
  onDelete: (id: string) => void;
  onStatus: (id: string) => void;
  onEdit: (id: string, t: string) => void;
}

const TodoItem: React.FC<PropsType> = (props) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [inp, setInp] = useState(props.text);

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleStatus = () => {
    props.onStatus(props.id);
  };

  const handleEdit = () => {
    setEdit(!isEdit);
  };
  const submit = (e: any) => {
    e.preventDefault();
    props.onEdit(props.id, inp);
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
