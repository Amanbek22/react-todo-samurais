import css from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={css.wrapper}>
        <h1 className={css.title}>Todos ({props.todoDone} / {props.todoLength})</h1>
        <div>
          <button>+plus</button>
          <span>0</span>
          <button>-minus</button>
        </div>
    </div>
  )
}

export default Header;