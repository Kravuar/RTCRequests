import {model} from "../domain/Context";
import {useState} from "react";
import "../styles.scss";

export default function SearchInput() {
    const [searchParam,] = model.useState('searchParam');
    const [, setSearchValue] = model.useState('searchValue');
    const [value, setValue] = useState("");

    return (
        <div className="input-group align-content-center justify-content-center">
            <input type="text" style={{minWidth: "65%"}} className="form-control" name={searchParam.name} value={value} placeholder={searchParam.placeholder} onChange={e => setValue(e.target.value)}/>
            <button className="btn btn-outline-primary" onClick={() => setSearchValue(value)}>Поиск</button>
        </div>
    );
}