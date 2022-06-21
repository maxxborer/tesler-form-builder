import { createLocales } from "@designable/core";

export const DatePicker = {
  "ru-RU": {
    title: "Выбор даты",
    settings: {
      "x-component-props": {
        disabledDate: {
          title: "Заблокировать дату",
          tooltip: "Формат (currentDate: moment) => boolean",
        },
        disabledTime: {
          title: "Заблокировать время",
          tooltip: "Формат (currentDate: moment) => boolean",
        },
        inputReadOnly: "Только для чтения",
        format: "Формат",
        picker: {
          title: "Тип выбора",
          dataSource: [
            "время",
            "дата",
            "месяц",
            "год",
            "квартал",
            "десятилетие",
          ],
        },
        showNow: "Показать сейчас",
        showTime: "Показать время",
        showToday: "Показать сегодня",
      },
    },
  },
  "en-US": {
    title: "DatePicker",
    settings: {
      "x-component-props": {
        disabledDate: {
          title: "Disabled Date",
          tooltip: "Format (currentDate: moment) => boolean",
        },
        disabledTime: {
          title: "Disabled Time",
          tooltip: "Format (currentDate: moment) => boolean",
        },
        inputReadOnly: "Input ReadOnly",
        format: "Format",
        picker: {
          title: "Picker Type",
          dataSource: ["Time", "Date", "Month", "Year", "Quarter", "Decade"],
        },
        showNow: "Show Now",
        showTime: "Show Time",
        showToday: "Show Today",
      },
    },
  },
};

export const DateRangePicker = createLocales(DatePicker, {
  "ru-RU": {
    title: "Диапазон дат",
  },
  "en-US": {
    title: "DateRange",
  },
});
