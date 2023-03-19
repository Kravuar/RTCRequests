import {config} from "../domain/Context";
import {statusColor} from "../domain/Algo";

export default function Row({row, onClick}) {

    return (
        <tr className="row" style={{backgroundColor: statusColor(row[config.statusColumn])}} onClick={onClick}>
            {row.map(col => <td>{col}</td>)}
        </tr>
    );
}