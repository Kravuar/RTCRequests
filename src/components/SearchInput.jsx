import {model} from "../domain/Context";

export default function SearchInput({onChange}) {
    const [searchParam,] = model.useState('searchParam');

    return <input className="form-control" name={searchParam.name} placeholder={searchParam.placeholder} onChange={onChange}/>
}