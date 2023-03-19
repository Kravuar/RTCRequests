import * as XLSX from "xlsx";
import {config, defaultValues} from "./Context";
import Fuse from "fuse.js";

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

export const filterLatest = (rows) => {
    const latest = new Map();

    for (const row of rows.filter(row => config.statusStates.liquid.items.has(row[config.statusColumn]))) {
        const id = row[config.idColumn]
        const new_date = new Date(row[config.dateColumn]);

        if (!latest.has(id))
            latest.set(id, row)
        else {
            const latest_date = latest.get(id)[config.dateColumn];
            if (new Date(latest_date) < new_date)
                latest.set(id, row);
        }
    }

    return Array.from(latest.values());
}

export const search = (rows, searchParam, searchValue) => {
    if (searchValue === "")
        return [];
    if (!config.specialSearchParams.has(searchParam))
        return rows.filter(row => row[searchParam] === searchValue);

    return config.specialSearchMapping[searchParam](rows, searchValue);
}

export const specialSearches = {
    findExpired: (rows, nDays) => {
        const result = []
        const current_date = new Date();

        for(const row of rows.values()) {
            const new_date = new Date(row[config.dateColumn])
            const difference_days = differenceInDays(new_date, current_date);
            if (difference_days >= nDays)
                result.push(row);
        }

        return result;
    },
    findByName: (rows, name) => {
        const fuse = new Fuse(rows, {
            keys: ['Клиент*'],
            shouldSort: true,
            ignoreLocation: true,
            threshold: 0.3
        });
        const result = fuse.search(name)
        return result.map(res => res.item)
    }
}

export const statusColor = (status) => {
    return config.statusStates.liquid.items.has(status)
        ? config.statusStates.liquid.color
        : config.statusStates.nonLiquid.items.has(status)
            ? config.statusStates.nonLiquid.color
            : config.statusStates.final.items.has(status)
                ? config.statusStates.final.color
                : defaultValues.rowColor;
}

const differenceInDays = (date1, date2) => {
    const diff = Math.abs(new Date(date1) - new Date(date2));
    return Math.ceil(diff / 1000 / 60 / 60 / 24);
}