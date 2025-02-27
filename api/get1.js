// /api/get1.js

const server = require('../server'); // Импортируем переменную и функции из server.js

module.exports = (req, res) => {
  try {
    // Получаем данные из глобальной переменной
    const data = server.getData;

    // Проверяем, что данные существуют
    if (!data) {
      return res.status(200).json({ message: 'Данные не найдены' });
    }

    // Логика обработки GET-запроса
    const responseData = {
      message: 'Информация о моде',
      modDetails: {
        message: 'Данные успешно получены',
        storedData: data,
      },
    };

    // Отправляем данные в виде JSON-ответа
    return res.status(200).json(responseData);
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка на сервере:', error);
    return res.status(200).json({ message: 'Ошибка при обработке запроса' });
  }
};
