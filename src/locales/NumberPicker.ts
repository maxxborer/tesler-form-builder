export const NumberPicker = {
  "ru-RU": {
    title: "Поле ввода числа",
    settings: {
      "x-component-props": {
        formatter: {
          title: "Конвертер форматов",
          tooltip: "Формат：function(value: number | string): string",
        },
        keyboard: "Включить сочетания клавиш",
        parser: {
          title: "Парсер форматов",
          tooltip:
            "Укажите метод обратного преобразования в числа из преобразователя формата и используйте его с преобразователем формата, формат: function(string): number",
        },
        decimalSeparator: "Десятичный разделитель",
        precision: "Точность",
        max: "Максимум",
        min: "Минимум",
        step: "Шаг",
        stringMode: {
          title: "Строковый формат",
          tooltip:
            "Поддержка высокоточных десятичных знаков после открытия. В то же время onChange вернет строковый тип",
        },
      },
    },
  },
  "en-US": {
    title: "NumberInput",
    settings: {
      "x-component-props": {
        formatter: {
          title: "Format Converter",
          tooltip: "Format：function(value: number | string): string",
        },
        keyboard: "Enable Shortcut Keys",
        parser: {
          title: "Format Parser",
          tooltip:
            "Specify the method of converting back to numbers from the format converter, and use it with the format converter, the format:function(string): number",
        },
        decimalSeparator: "Decimal Separator",
        precision: "Precision",
        max: "Max",
        min: "Min",
        step: "Step",
        stringMode: {
          title: "String Format",
          tooltip:
            "Support high-precision decimals after opening. At the same time onChange will return string type",
        },
      },
    },
  },
};
