export default {
  cats: [
    {
      id: 1,
      type: "cat",
      title: "Обязательные для всех",
      status: [
        "red", "yellow", "orange"
      ],
      text: "Документы, обязательные для всех сотрудников без исключения",
      items: [
        {
          title: "Паспорт",
          required: true,
          status: [
            "cyan"
          ],
          text: "Для всех"
        },
        {
          title: "ИНН",
          required: true,
          text: "Для всех"
        }
      ]
    },
    {
      id: 2,
      type: "cat",
      title: "Обязательные для трудоустройства",
      status: [
        "red", "yellow", "orange"
      ],
      text: "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",
      items: [
        {
          title: "Паспорт",
          required: true,
          status: ["cyan"],
          text: "Для всех"
        },
        {
          title: "ИНН",
          required: true,
          text: "Для всех"
        }
      ]
    }
  ]
}
