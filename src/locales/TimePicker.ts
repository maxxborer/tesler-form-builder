import { createLocales } from "@designable/core";
import { DatePicker } from "./DatePicker";

export const TimePicker = createLocales(DatePicker, {
  "ru-RU": {
    title: "Выбор времени",
    settings: {
      "x-component-props": {
        clearText: "Очистка текста",
        disabledHours: "Отключить часы",
        disabledMinutes: "Отключить минуты",
        disabledSeconds: "Отключить секунды",
        hideDisabledOptions: "Скрыть отключенные параметры",
        hourStep: "Шаг часов",
        minuteStep: "Шаг минут",
        secondStep: "Шаг секунд",
        use12Hours: "Использовать 12-часовой формат",
        inputReadOnly: "Поле только для чтения",
        showNow: "Показать сейчас",
        format: "Формат",
      },
    },
  },
  "en-US": {
    title: "Time Picker",
    settings: {
      "x-component-props": {
        clearText: "Clear Text",
        disabledHours: "Disbaled Hours",
        disabledMinutes: "Disabled Minutes",
        disabledSeconds: "Disabled Seconds",
        hideDisabledOptions: "Hide Disabled Options",
        hourStep: "Hour Step",
        minuteStep: "Minute Step",
        secondStep: "Second Step",
        use12Hours: "Use 12-hour",
        inputReadOnly: "Input ReadOnly",
        showNow: "Show Now",
        format: "Format",
      },
    },
  },
});

export const TimeRangePicker = createLocales(TimePicker, {
  "ru-RU": {
    title: "Временной интервал",
  },
  "en-US": {
    title: "Time Range",
  },
});
