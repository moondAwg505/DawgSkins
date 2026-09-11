import style from "./searchInput.module.css";

export const SearchInput = () => {
  return (
    <div className={style.search_input_container}>
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
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
