import {model} from "../domain/Context";
import {useState} from "react";

export default function SearchInput() {
    const [searchParam,] = model.useState('searchParam');
    const [, setSearchValue] = model.useState('searchValue');
    const [value, setValue] = useState("");

    return (
        <div className="row">
            <input className="form-control" name={searchParam.name} value={value} placeholder={searchParam.placeholder} onChange={e => setValue(e.target.value)}/>
            <button className="btn btn-outline-success" onClick={() => setSearchValue(value)}>Поиск</button>
        </div>
    );
}