import { createLocales } from "@designable/core";

export const Upload = {
  "ru-RU": {
    title: "Загрузка",
    settings: {
      "x-component-props": {
        accept: "Принимаемые типы файлов",
        action: "Действие",
        data: "Данные",
        directory: "Директория",
        headers: "Заголовки",
        listType: {
          title: "Тип списка",
          dataSource: ["Текст", "Изображение", "Карточка"],
        },
        multiple: "Множественная загрузка",
        name: "Имя",
        openFileDialogOnClick: {
          title: "Открыть диалоговое окно при клике",
        },
        showUploadList: "Показать список загрузки",
        withCredentials: "Передавать cookies",
        maxCount: "Максимальное количество файлов",
        method: "Метод",
        textContent: "Текстовое содержимое",
      },
    },
  },
  "en-US": {
    title: "Upload",
    settings: {
      "x-component-props": {
        accept: "Accept",
        action: "Upload Address",
        data: "Data",
        directory: "Support Upload Directory",
        headers: "Headers",
        listType: { title: "List Type", dataSource: ["Text", "Image", "Card"] },
        multiple: "Multiple",
        name: "Name",
        openFileDialogOnClick: "Open File Dialog On Click",
        showUploadList: "Show Upload List",
        withCredentials: "withCredentials",
        maxCount: "Max Count",
        method: "Method",
        textContent: "Text Content",
      },
    },
  },
};

export const UploadDragger = createLocales(Upload, {
  "ru-RU": {
    title: "Загрузка DnD",
    settings: {
      "x-component-props": {},
    },
  },
  "en-US": {
    title: "UploadDragger",
    settings: {
      "x-component-props": {},
    },
  },
});
