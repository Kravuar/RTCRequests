import {config, model} from "../domain/Context";
import {useNavigate} from "react-router-dom";
import {statusColor} from "../domain/Algo";

export default function TableBody({rows}) {
    const navigate = useNavigate();
    const [showColumns,] = model.useState("showColumns");

    const onClick = (index) => {
        const id = rows[index][config.idColumn];
        navigate(`/history/${id}`);
    }

    return (
        <table className="table table-bordered table-primary my-4">
            <thead>
            <tr>
                {
                    showColumns.map((col, idx) => <td key={idx} className='h6'>{col}</td>)
                }
            </tr>
            </thead>
            <tbody>
            {
                rows.map((row, index) =>
                    <tr onClick={() => onClick(index)} key={index}
                        style={{backgroundColor: statusColor(row[config.statusColumn])}}>
                        {showColumns.map((col, idx) => <td key={row[col] + idx}>{row[col]}</td>)}
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}