import Row from "./Row";
import {config, model} from "../domain/Context";
import {useNavigate} from "react-router-dom";

export default function TableBody({rows}) {
    const navigate = useNavigate();
    const [{columns},] = model.useState("file");
    const [showColumns,] = model.useState("showColumns");
    const indices = showColumns.map(column => columns.indexOf(column));

    const filterRow = (row) => {
        return row.filter((_, index) => indices.includes(index));
    }

    const onClick = (index) => {
        const id = rows[index][config.idColumn];
        navigate(`/history/${id}`);
    }

    return(
        <div>
            <table className="table table-bordered table-primary">
                <thead>
                <tr>
                    {
                        showColumns.map(col => <td className='h6'>{col}</td>)
                    }
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((row, index) =>
                        <Row row={filterRow(row)} onClick={() => onClick(index)}/>)
                }
                </tbody>
            </table>
        </div>
    );
}