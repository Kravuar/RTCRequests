import {useParams} from "react-router-dom";
import {config, model} from "../domain/Context";
import ColumnPicker from "../components/ColumnPicker";
import TableBody from "../components/TableBody";

export default function History() {
    const {id} = useParams();
    const [{rows},] = model.useState("file");

    const history = rows.filter(row => row[config.idColumn] === id)
                        .sort((a, b) => new Date(a[config.dateColumn]) - new Date(b[config.dateColumn]));

    return (
        <div className="container shadow my-4 px-2 py-2">
            <h1>Заявка №{id}</h1>
            <ColumnPicker/>
            <TableBody rows={history}/>
        </div>
    );
}