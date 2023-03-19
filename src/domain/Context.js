import { createStore } from "state-pool";
import {specialSearches} from "./Algo";

export const config = {
    nDaysForExpired: 5,
    dateColumn: "Дата входа заявки в статус",
    idColumn: "Номер заявки",
    statusColumn: "Статус",
    specialSearchParams: new Set(["Застоявшиеся заявки"]),
    specialSearchMapping: {
        "Застоявшиеся заявки": specialSearches.findExpired
    },
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
        }
    ],
    statusStates: {
        liquid: {
            items: new Set(['Создание договоров', 'Отложена (нет тех. возможности)', 'Назначено тех. обследование',
                'В работе', 'Заведение заявки', 'Обработка в СУС', 'Отложена по просьбе клиента',
                'Назначение тех. данных', 'Отсутствие ТВП ШПД по запрашиваемой технологии', 'Закрытие наряда', 'Не подтверждена'
                ]),
            color: 'yellow'
        },
        final: {
            items: new Set(['Закрыт (нет тех. возможности)', 'Закрыт (отказ клиента)', 'Закрыт', 'Закрыт (не удалось связаться с клиентом)']),
            color: 'green'
        },
        nonLiquid: {
            items: new Set(['Удалена (ошибка ввода)', 'Удалена (абонент уже подключен)', 'Удалена (Смена ТП)', 'Удалена', 'Тест']),
            color: 'red'
        }
    }
}

export const defaultValues = {
    columns: ["Номер заявки", "ИНН", "Статус", "Дата входа заявки в статус"],
    rowColor: "grey"
}

export const model = createStore();
model.setState('searchParam', config.searchParams[0]);
model.setState('searchValue', "");
model.setState('showColumns', defaultValues.columns);
