// /api/sendData.js

module.exports = (req, res) => {
  // Проверка, что запрос использует метод POST
  if (req.method === 'POST') {
    // Получаем данные из тела запроса
    const { data } = req.body;

    // Проверка, что данные существуют
    if (!data) {
      return res.status(400).json({ error: 'Данные не были переданы' });
    }

    // Логика обработки полученных данных
    console.log("Полученные данные:", data);

    // Отправка ответа
    res.status(200).json({
      message: 'Данные успешно получены!',
      receivedData: data
    });
  } else {
    // Если метод не POST, возвращаем ошибку
    res.status(405).json({ error: 'Метод не разрешен' });
  }
};
