import {config, model} from "../domain/Context";
import TableBody from "./TableBody";
import {search} from "../domain/Algo";
import {Navigate} from "react-router-dom";

export default function Table() {
    const [latest,] = model.useState("latest");
    const [searchValue,] = model.useState("searchValue");
    const searchParam = model.getState("searchParam").getValue().name;

    if (searchParam === config.idColumn && searchValue !== "")
        return <Navigate to={`/history/${searchValue}`}/>

    return <TableBody rows={search(latest, searchParam, searchValue)}/>
}