const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Для парсинга JSON запросов
app.use(bodyParser.json());

// Создаем глобальную переменную для хранения данных
let storedData = "Initial data";

// Обработка POST запроса для обновления данных
app.post('/api/setData', (req, res) => {
  storedData = req.body.data;  // Обновляем данные
  res.status(200).json({ message: 'Данные успешно обновлены!', storedData });
});

// Обработка GET запроса для получения данных
app.get('/api/getData', (req, res) => {
  res.status(200).json({ message: 'Данные получены', storedData });
});


// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
