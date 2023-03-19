import {model} from "../domain/Context";
import Checkbox from "./Checkbox";

export default function ColumnPicker() {
    const [{columns},] = model.useState("file");
    const [showColumns, setShowColumns] = model.useState("showColumns");

    const updateShowColumns = (column, state) => {
        let newState = [...showColumns];

        if (state)
            newState.push(column);
        else
            newState.splice(newState.indexOf(column), 1);

        setShowColumns(newState);
    }

    const isSelected = (column) => {
        return showColumns.includes(column);
    }

    return (
        <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                Колонки
            </button>
            <ul className="dropdown-menu">
                <ul className="list-group overflow-scroll" style={{maxHeight: 300}}>
                    {
                            columns.map(column =>
                                <Checkbox key={column} label={column} column={column} selected={isSelected(column)}
                                                    onChange={state => updateShowColumns(column, state)}/>
                            )
                    }
                </ul>
            </ul>
        </div>
    )
}