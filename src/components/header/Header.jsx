import css from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={css.wrapper}>
        <h1 className={css.title}>Todos ({props.todoDone} / {props.todoLength})</h1>
    </div>
  )
}

export default Header;