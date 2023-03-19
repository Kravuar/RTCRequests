import * as XLSX from "xlsx";

export const xlsxBadParser = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onabort = reject;
        reader.onerror = reject;
        reader.onload = async () => {
            const wb = XLSX.read(reader.result, {type: 'binary', cellDates: true, cellHTML: true, cellNF: false,})
            const ws = wb.Sheets[wb.SheetNames[0]]
            const rows = XLSX.utils.sheet_to_json(ws, {raw: false})
            Object.keys(ws).forEach(function(s) {
                if(ws[s].t === 'n') {
                    ws[s].z = '0';
                    ws[s].t = 's';
                }
            });
            for(const row of rows)
                if(row['Клиент*'][0] === '<') {
                    const div = document.createElement('span');
                    div.innerHTML = row['Клиент*'];
                    row['Клиент*'] = div.innerText;
                    div.remove();
                }
            const columns = Object.keys(rows[0]);
            resolve({rows, columns});
        }
        reader.readAsArrayBuffer(file);
    })
}