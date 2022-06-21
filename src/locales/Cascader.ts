export const Cascader = {
  "ru-RU": {
    title: "Каскад",
    settings: {
      "x-component-props": {
        changeOnSelect: {
          title: "Изменить при выборе",
          tooltip:
            "Щелкните на каждом уровне меню и значение параметра изменится.",
        },
        displayRender: {
          title: "Визуализация",
          tooltip:
            'Функция рендеринга, отображаемая после выбора, по умолчанию — label => label.join("/") ',
        },
        fieldNames: {
          title: "Имена полей",
          tooltip:
            'Значение по умолчанию：{ label: "label", value: "value", children: "children" }',
        },
      },
    },
  },
  "en-US": {
    title: "Cascader",
    settings: {
      "x-component-props": {
        changeOnSelect: {
          title: "Change On Select",
          tooltip: "Click on each level of menu option value will change",
        },
        displayRender: {
          title: "Display Render",
          tooltip:
            'The rendering function displayed after selection, the default is label => label.join("/")	',
        },
        fieldNames: {
          title: "Field Names",
          tooltip:
            'Defaults：{ label: "label", value: "value", children: "children" }',
        },
      },
    },
  },
};
