import style from "./searchInput.module.css";
import { Search } from "lucide-react";

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: ISearchProps) => {
  return (
    <form
      className={style.search_input_container}
      // So that the form doedn't reload the page
      onSubmit={(e) => e.preventDefault()}
    >
      <Search className={style.loop_search} />
      <input
        type="text"
        className={style.input}
        placeholder="Search item"
        aria-label="Search string"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchInput;
