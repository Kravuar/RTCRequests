import {model} from "../domain/Context";

export default function SearchInput({onChange}) {
    const [searchParam,] = model.useState('searchParam');
    const [, setSearchValue] = model.useState('searchValue');

    return <input className="form-control" name={searchParam.name} placeholder={searchParam.placeholder} onChange={e => setSearchValue(e.target.value)}/>
}