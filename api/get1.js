// /api/getData.js

module.exports = (req, res) => {
  // Логика обработки GET-запроса
  const responseData = {
    message: 'Информация о моде',
    modDetails: {
      name: 'Minecraft Mod',
      description: 'Мод для Minecraft, добавляющий новые возможности!',
      version: '1.0.0',
    },
  };

  // Отправляем данные в виде JSON-ответа
  res.status(200).json(responseData);
};
