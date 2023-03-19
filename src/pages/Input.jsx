import {model} from "../domain/Context";
import {useNavigate} from "react-router-dom";
import {useAlert} from "react-alert";
import {useDropzone} from 'react-dropzone'
import {filterLatest, xlsxBadParser} from "../domain/Algo";
import {useCallback} from "react";

export default function Input() {
    const navigate = useNavigate();
    const alert = useAlert();

    const onDrop = useCallback(async (files) => {
        const parsed = await xlsxBadParser(files[0]);
        const latest = filterLatest(parsed.rows);
        model.setState("latest", latest);
        model.setState("file", parsed);
        alert.success("Файл успешно загружен.");
        navigate("/main");
    }, [alert, navigate]);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div {...getRootProps({className: 'dropzone'})} style={{width: "100%", height: "100%"}}>
            <label className="form-label" htmlFor="fileInput">
                Загрузите .XLSX файл.
            </label>
            <input
                {...getInputProps()}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
            <svg width="100" height="100" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M107.25 122.146H35.75C34.1047 122.146 32.7709 120.812 32.7709 119.167V23.8333C32.7709 22.188 34.1047 20.8542 35.75 20.8542H80.2808C81.0566 20.8542 81.8014 21.1566 82.3579 21.6973L109.327 47.9171C109.904 48.478 110.229 49.2485 110.229 50.0531V119.167C110.229 120.812 108.895 122.146 107.25 122.146ZM23.8334 23.8333C23.8334 17.2519 29.1686 11.9167 35.75 11.9167H80.2808C83.3833 11.9167 86.3637 13.1266 88.5879 15.2891L115.557 41.509C117.865 43.7526 119.167 46.8345 119.167 50.0531V119.167C119.167 125.748 113.832 131.083 107.25 131.083H35.75C29.1686 131.083 23.8334 125.748 23.8334 119.167V23.8333ZM95.3334 62.5625H47.6667V53.625H95.3334V62.5625ZM47.6667 81.9271H95.3334V72.9896H47.6667V81.9271ZM47.6667 101.292H95.3334V92.3541H47.6667V101.292Z"
                      fill="black"/>
            </svg>
        </div>
    );
}