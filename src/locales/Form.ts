import { createLocales } from "@designable/core";
import { Component } from "./Component";

export const Form = createLocales(Component, {
  "ru-RU": {
    title: "Форма",
    settings: {
      labelCol: "Наименование колонки",
      wrapperCol: "Обертка колонки",
      colon: "Двоеточие",
      labelAlign: {
        title: "Выравнивание наименования",
        dataSource: ["Слева", "Справа", "Наследование"],
      },
      wrapperAlign: {
        title: "Выравнивание обертки",
        dataSource: ["Слева", "Справа", "Наследование"],
      },
      labelWrap: "Перенос наименования",
      wrapperWrap: "Перенос обертки",
      labelWidth: "Ширина наименования",
      wrapperWidth: "Ширина обертки",
      fullness: "Полнота",
      inset: "Вставка",
      shallow: "Мелкий",
      bordered: "Обрамленный",
      size: {
        title: "Размер",
        dataSource: ["Большой", "Маленький", "По умолчанию", "Наследование"],
      },
      layout: {
        title: "Макет",
        dataSource: [
          "Вертикальный",
          "Горизонтальный",
          "Линейный",
          "Наследование",
        ],
      },
      feedbackLayout: {
        title: "Макет обратной связи",
        dataSource: [
          "Свободный",
          "Сжатый",
          "Всплывающий",
          "Не установлено",
          "Наследование",
        ],
      },
      tooltipLayout: {
        title: "Макет подсказки",
        dataSource: ["Значок", "Текст", "Наследование"],
      },
    },
  },
  "en-US": {
    title: "Form",
    settings: {
      labelCol: "Label Col",
      wrapperCol: "Wrapper Col",
      colon: "Colon",
      labelAlign: {
        title: "Label Align",
        dataSource: ["Left", "Right", "Inherit"],
      },
      wrapperAlign: {
        title: "Wrapper Align",
        dataSource: ["Left", "Right", "Inherit"],
      },
      labelWrap: "Label Wrap",
      wrapperWrap: "Wrapper Wrap",
      labelWidth: "Label Width",
      wrapperWidth: "Wrapper Width",
      fullness: "Fullness",
      inset: "Inset",
      shallow: "Shallow",
      bordered: "Bordered",
      size: {
        title: "Size",
        dataSource: ["Large", "Small", "Default", "Inherit"],
      },
      layout: {
        title: "Layout",
        dataSource: ["Vertical", "Horizontal", "Inline", "Inherit"],
      },
      feedbackLayout: {
        title: "Feedback Layout",
        dataSource: ["Loose", "Terse", "Popup", "None", "Inherit"],
      },
      tooltipLayout: {
        title: "Tooltip Layout",
        dataSource: ["Icon", "Text", "Inherit"],
      },
    },
  },
});
