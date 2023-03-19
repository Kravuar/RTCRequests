import { createStore } from "state-pool";

export const config = {
    searchParams: [
        {
            name: "Номер заявки",
            placeholder: "Номер заявки..."
        },
        {
            name: "ИНН",
            placeholder: "ИНН..."
        },
        {
            name: "Застоявшиеся заявки",
            placeholder: "Дней застоя..."
        },
        {
            name: "Менеджер",
            placeholder: "ФИО или ID..."
        }
    ]
}

export const defaultValues = {
    columns: ["Номер заявки", "ИНН", "Статус", "Дата входа заявки в статус"]
}

export const model = createStore();
model.setState('searchParam', config.searchParams[0]);
model.setState('showColumns', defaultValues.columns);