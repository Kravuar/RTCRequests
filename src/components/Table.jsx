import {config, model} from "../domain/Context";
import TableBody from "./TableBody";
import {search} from "../domain/Algo";
import {Navigate} from "react-router-dom";

export default function Table() {
    const [latest,] = model.useState("latest");
    const [searchParam,] = model.useState("searchParam");
    const [searchValue,] = model.useState("searchValue");

    if (searchParam === config.idColumn)
        return <Navigate to={`/history/${searchValue}`}/>

    return <TableBody rows={search(latest, searchParam, searchValue)}/>
}