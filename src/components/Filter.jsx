import {model} from "../domain/Context";
import {config} from "../domain/Context";
import Toggle from "./Toggle";

export default function Filter() {
    const [selected, setSelected] = model.useState('searchParam');

    return(
        <div className="container">
            <div className="row mx-2 my-2">
                {config.searchParams.map((searchParam, idx) =>
                    <Toggle key={idx} name={searchParam.name} isSelected={selected === searchParam} onChoice={() => setSelected(searchParam)}>{searchParam.name}</Toggle>
                )}
            </div>
        </div>
    );
}