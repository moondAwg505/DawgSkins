import style from "./searchInput.module.css";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <form className={style.search_input_container}>
              <Search className={style.loop_search}/>
      <input
        type="text"
        className={style.input}
        placeholder="Search item"
        aria-label="Search string"
      >
      </input>
    </form>
  );
};

export default SearchInput;
