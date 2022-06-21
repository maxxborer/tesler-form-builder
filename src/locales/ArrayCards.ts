import { createLocales } from "@designable/core";
import { Card } from "./Card";

export const ArrayCards = createLocales(Card, {
  "ru-RU": {
    title: "Массив карточек",
    addIndex: "Добавить индекс",
    addOperation: "Добавить действие",
  },
  "en-US": {
    title: "Array Cards",
    addIndex: "Add Index",
    addOperation: "Add Operations",
  },
});
