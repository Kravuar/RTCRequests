export default function Row({row, onClick}) {

    return (
        <tr className="row" onClick={onClick}>
            {row.map(col => <td>{col}</td>)}
        </tr>
    );
}