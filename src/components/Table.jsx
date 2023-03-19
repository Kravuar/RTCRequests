import {model} from "../domain/Context";
import TableBody from "./TableBody";
import {search} from "../domain/Algo";

export default function Table() {
    const [latest,] = model.useState("latest");
    const searchParam = model.useState("searchParam");
    const searchValue = model.useState("searchValue");

    const toShow = search(latest, searchParam, searchValue);

    return <TableBody rows={toShow}/>
}