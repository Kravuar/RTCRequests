import {model} from "../domain/Context";
import {useNavigate} from "react-router-dom";
import {useAlert} from "react-alert";
import {xlsxBadParser} from "../domain/Algo";

export default function Input() {
    const navigate = useNavigate();
    const alert = useAlert();

    const handleFileChange = async (event) => {
        const parsed = await xlsxBadParser(event.target.files[0]);
        model.setState("file", parsed);
        alert.success("Файл успешно загружен.")
        navigate("/main");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <div className="custom-file">
                        <label className="form-label" htmlFor="fileInput">
                            Загрузите .XLSX файл.
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                            accept="application/vnd.ms-excel"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}