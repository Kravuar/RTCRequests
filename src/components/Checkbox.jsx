import {useId} from "react";

export default function Checkbox({label, selected, onChange}) {
    const id = useId();

    return (
        <li className='list-group-item'>
            <div className='m-1 form-check'>
                <input className="form-check-input" type="checkbox" autoComplete="off" id={id} checked={selected}
                       onChange={e => onChange(e.target.checked)}
                />
                <label className="form-check-label" htmlFor={id}>
                    {label}
                </label>
            </div>
        </li>
    )
};