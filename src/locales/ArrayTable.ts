export const ArrayTable = {
  "ru-RU": {
    title: "Таблица массивов",
    addSortHandle: "Добавить сортировку",
    addColumn: "Добавить столбец",
    addIndex: "Добавить индекс",
    addOperation: "Добавить действие",
    settings: {
      "x-component-props": {
        showHeader: "Показать заголовок",
        sticky: "Липкий",
        align: {
          title: "Выравнивание",
          dataSource: ["Слева", "Справа", "По центру"],
        },
        colSpan: "Размах столбца",
        fixed: {
          title: "Фиксированный",
          dataSource: ["Слева", "Справа", "Не установлено"],
        },
        width: "Ширина",
        defaultValue: "Значение по умолчанию",
        tableLayout: {
          title: "Макет таблицы",
          dataSource: ["Авто", "Фиксированный"],
        },
      },
    },
  },
  "en-US": {
    title: "Array Table",
    addSortHandle: "Add Sort Handle",
    addColumn: "Add Column",
    addIndex: "Add Index",
    addOperation: "Add Operations",
    settings: {
      "x-component-props": {
        showHeader: "Show Header",
        sticky: "Sticky",
        align: {
          title: "Align",
          dataSource: ["Left", "Right", "Center"],
        },
        colSpan: "Col Span",
        fixed: { title: "Fixed", dataSource: ["Left", "Right", "None"] },
        width: "Width",
        defaultValue: "Default Value",
        tableLayout: {
          title: "Table Layout",
          dataSource: ["Auto", "Fixed"],
        },
      },
    },
  },
};

export const ArrayTableColumn = {
  "ru-RU": {
    title: "Столбец",
    settings: {
      "x-component-props": {
        title: "Заголовок",
        align: {
          title: "Выровнять",
          dataSource: ["Слева", "Справа", "По центру"],
        },
        colSpan: "Размах столбца",
        width: "Ширина",
        fixed: {
          title: "Фиксированный",
          dataSource: ["Слева", "Справа", "Не установлено"],
        },
      },
    },
  },
  "en-US": {
    title: "Column",
    settings: {
      "x-component-props": {
        title: "Title",
        align: {
          title: "Align",
          dataSource: ["Left", "Right", "Center"],
        },
        colSpan: "Col Span",
        width: "Width",
        fixed: {
          title: "Fixed",
          dataSource: ["Left", "Right", "None"],
        },
      },
    },
  },
};
