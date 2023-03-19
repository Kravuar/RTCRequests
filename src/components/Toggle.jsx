import {useId} from "react";

export default function Toggle({isSelected, onChoice, name}) {
    const id = useId();
    return (
        <div className="form-check">
            <input type="checkbox" className="btn-check" id={id} autoComplete="off" name={name}
                   onChange={() => onChoice(name)}
                   checked={isSelected}
            />
            <label className="btn btn-primary" htmlFor={id}>
                {name}
            </label>
        </div>
    )
}