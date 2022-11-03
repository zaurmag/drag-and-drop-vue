export const cats = [
  {
    id: 1,
    order: 1,
    type: "cat",
    title: "Обязательные для всех",
    status: [
      "red", "yellow", "orange"
    ],
    text: "Документы, обязательные для всех сотрудников без исключения"
  },
  {
    id: 2,
    order: 2,
    type: "cat",
    title: "Обязательные для трудоустройства",
    status: [
      "red", "yellow", "orange"
    ],
    text: "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж"
  }
]

export const items = [
  {
    id: 1,
    catId: 1,
    title: "Паспорт",
    status: [
      "cyan"
    ],
    text: "Для всех",
    required: true
  },
  {
    id: 2,
    catId: 1,
    title: "ИНН",
    text: "Для всех"
  },
  {
    id: 3,
    catId: 2,
    title: "Паспорт",
    status: ["cyan"],
    text: "Для всех",
    required: true
  },
  {
    id: 4,
    catId: 2,
    title: "ИНН",
    text: "Для всех"
  },
  {
    id: 5,
    title: "Тестовое задание кандидата",
    text: "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
    order: 1,
    required: true
  },
  {
    id: 6,
    title: "Тестовое задание кандидата",
    status: ["blue", "gray"],
    order: 2,
  },
  {
    id: 7,
    title: "Мед. книжка",
    order: 3
  }
]
