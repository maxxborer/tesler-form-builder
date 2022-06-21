export const TreeSelect = {
  "ru-RU": {
    title: "Древовидный выбор",
    settings: {
      "x-component-props": {
        mode: {
          title: "Режим",
          dataSource: ["Несколько значений", "Теги", "Одно значение"],
        },
        autoClearSearchValue: {
          title: "Автоматически очищать значение поиска",
          tooltip: "Используется только для режима множественных и тегов",
        },
        defaultActiveFirstOption: "По умолчанию активная первая опция",
        defaultOpen: "По умолчанию открыто",
        filterOption: "Фильтровать опции",
        filterSort: "Сортировать",
        labelInValue: {
          title: "Показывать метку в значении",
          tooltip:
            "Следует ли обернуть метку каждой опции в значение, это изменит значение Тип выбора из строки на Формат {значение: строка, метка: ReactNode}",
        },
        listHeight: "Высота списка",
        maxTagCount: {
          title: "Максимальное количество тегов",
          tooltip:
            "Если количество тегов больше этого значения, они будут отфильтрованы",
        },
        maxTagPlaceholder: {
          title: "Макс. тег плейсхолдер",
          tooltip: "Содержимое отображается, когда тег скрыт",
        },
        maxTagTextLength: "Максимальная длина текста тега",
        showArrow: "Показывать стрелку",
        virtual: "Виртуальный",
        dropdownMatchSelectWidth: {
          title: "Совпадение ширины списка",
          tooltip:
            "По умолчанию будет установлена минимальная ширина, и она будет игнорироваться, если значение меньше ширины поля выбора. false отключит виртуальную прокрутку",
        },
        showCheckedStrategy: {
          title: "Стратегия показа отмеченных",
          tooltip:
            "При настройке treeCheckable определите, как заполнять выбранный элемент. TreeSelect.SHOW_ALL: Показать все выбранные узлы (включая родительские узлы). TreeSelect.SHOW_PARENT: отображать только родительский узел (когда выбраны все дочерние узлы под родительским узлом). Показывать только дочерние узлы по умолчанию",
          dataSource: [
            "Показать все",
            "Показать родительский узел",
            "Показать дочерние узлы",
          ],
        },
        treeCheckable: "Можно ли выбирать узлы",
        treeDefaultExpandAll: "По умолчанию все узлы раскрыты",
        treeDefaultExpandedKeys: {
          title: "Ключи по умолчанию раскрытых узлов",
          tooltip: "Формат：Array<string | number>",
        },
        treeNodeFilterProp: {
          title: "Свойство узла для фильтрации",
          tooltip:
            "Атрибут treeNode, соответствующий входному фильтру элемента",
        },
        treeDataSimpleMode: {
          title: "Простой режим",
          tooltip: `Используйте treeData в простом формате. Для конкретных настроек обратитесь к устанавливаемому типу (treeData должен быть структурой данных, подобной этой: [{id:1, pId:0, value:'1', title:"test1",...},... ], pId — это идентификатор родительского узла)`,
        },
        treeNodeLabelProp: {
          title: "Свойство узла для отображения метки",
          tooltip: "The default is title",
        },
        filterTreeNode: "Фильтровать узлы",
      },
    },
  },
  "en-US": {
    title: "TreeSelect",
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
        defaultOpen: "Default Open",
        filterOption: "Filter Option",
        filterSort: "Filter Sort",
        labelInValue: "Label In Value",
        listHeight: "List Height",
        maxTagCount: "Max Tag Count",
        maxTagPlaceholder: {
          title: "Max Tag Placeholder",
          tooltip: "Content displayed when tag is hidden",
        },
        maxTagTextLength: "Max Tag Text Length",
        notFoundContent: "Not Found Content",
        showArrow: "Show Arrow",
        virtual: "Use Virtual Scroll",
        dropdownMatchSelectWidth: {
          title: "Dropdown Match Select Width",
          tooltip:
            "By default, min-width will be set, and it will be ignored when the value is less than the width of the selection box. false will turn off virtual scrolling",
        },
        showCheckedStrategy: {
          title: "Show Checked Strategy",
          tooltip:
            "When configuring treeCheckable, define how to backfill the selected item. TreeSelect.SHOW_ALL: Show all selected nodes (including parent nodes). TreeSelect.SHOW_PARENT: Only display the parent node (when all child nodes under the parent node are selected). Only show child nodes by default",
          dataSource: ["Show All", "Show Parent Node", "Show Child Nodes"],
        },
        treeCheckable: "Tree Checkable",
        treeDefaultExpandAll: "Tree Default Expand All",
        treeDefaultExpandedKeys: {
          title: "Tree Default Expanded Keys",
          tooltip: "Format：Array<string | number>",
        },
        treeNodeFilterProp: {
          title: "Tree Node Filter Properties",
          tooltip:
            "The treeNode attribute corresponding to the input item filter",
        },
        treeDataSimpleMode: {
          title: "Tree Data Simple Mode",
          tooltip: `Use treeData in a simple format. For specific settings, refer to the settable type (the treeData should be a data structure like this: [{id:1, pId:0, value:'1', title:"test1",...} ,...], pId is the id of the parent node)`,
        },
        treeNodeLabelProp: {
          title: "Tree Node Label Properties",
          tooltip: "The default is title",
        },
        filterTreeNode: "Filter Tree Node",
      },
    },
  },
};
