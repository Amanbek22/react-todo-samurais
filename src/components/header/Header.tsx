import React from "react";
// @ts-ignore
import css from "./Header.module.css";


interface PropsType {
  todoDone: number | string;
  todoLength: number | string;
}
const Header = (props: PropsType) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Todos ({props.todoDone} / {props.todoLength})
      </h1>
    </div>
  );
};

export default Header;
