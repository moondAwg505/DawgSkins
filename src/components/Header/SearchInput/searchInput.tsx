import style from "./searchInput.module.css";

export const SearchInput = () => {
  return (
    <form className={style.search_input_container}>
      <input
        type="text"
        className={style.input}
        placeholder="Search item"
        aria-label="Search string"
      ></input>
      <button
        type="submit"
        className={style.search_button}
        aria-label="Search button"
      ></button>
    </form>
  );
};

export default SearchInput;
