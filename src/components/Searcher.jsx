import SearchInput from "./SearchInput";
import Filter from "./Filter";
import ColumnPicker from "./ColumnPicker";

export default function Searcher() {

    return(
        <div className="row">
            <SearchInput/>
            <Filter/>
            <ColumnPicker/>
        </div>
    );
}