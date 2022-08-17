export const Select = {
  "ru-RU": {
    title: "Выпадающий список",
    settings: {
      "x-component-props": {
        mode: {
          title: "Режим",
          dataSource: ["Несколько значений", "Теги", "Одно значение"],
        },
        autoClearSearchValue: {
          title: "Автоматически очистить значение поиска",
          tooltip: "Используется только для режима множественных и тегов",
        },
        defaultActiveFirstOption: "По умолчанию активная первая опция",
        dropdownMatchSelectWidth: "Ширина выпадающего списка",
        defaultOpen: "Открыто по умолчанию",
        filterOption: "Опция фильтрации",
        filterSort: "Сортировка",
        labelInValue: {
          title: "Наименование в значении",
          tooltip:
            "Следует ли обернуть метку каждой опции в значение, это изменит значение Тип выбора из строки на Формат {значение: строка, метка: ReactNode}",
        },
        listHeight: "Высота списка",
        maxTagCount: {
          title: "Максимальное количество тегов",
          tooltip:
            "Сколько тегов отображается максимально, адаптивный режим будет стоить производительности",
        },
        maxTagPlaceholder: {
          title: "Макс. тег плейсхолдер",
          tooltip: "Содержимое отображается, когда тег скрыт",
        },
        maxTagTextLength: "Максимальная длина текста тега",
        showArrow: "Показать стрелку",
        virtual: "Использовать виртуальную прокрутку",
      },
    },
  },
  "en-US": {
    title: "Select",
    settings: {
      "x-component-props": {
        mode: {
          title: "Mode",
          dataSource: ["Multiple", "Tags", "Single"],
        },
        autoClearSearchValue: {
          title: "Auto Clear Search Value",
          tooltip: "Only used to multiple and tags mode",
        },
        defaultActiveFirstOption: "Default Active First Option",
        dropdownMatchSelectWidth: "Dropdown Match Select Width",
        defaultOpen: "Default Open",
        filterOption: "Filter Option",
        filterSort: "Filter Sort",
        labelInValue: "label InValue",
        listHeight: "List Height",
        maxTagCount: "Max Tag Count",
        maxTagPlaceholder: {
          title: "Max Tag Placeholder",
          tooltip: "Content displayed when tag is hidden",
        },
        maxTagTextLength: "Max Tag Text Length",
        showArrow: "Show Arrow",
        virtual: "Use Virtual Scroll",
      },
    },
  },
};
