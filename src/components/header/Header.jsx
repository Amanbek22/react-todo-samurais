import css from "./Header.module.css"

const Header = () => {
  return (
    <div className={css.wrapper}>
        <h1 className={css.title}>Todos (2 / 4)</h1>
    </div>
  )
}

export default Header;