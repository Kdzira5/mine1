const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Для парсинга JSON запросов
app.use(bodyParser.json());

// Обработка POST запроса (отправка данных)
app.post('/api/sendData', (req, res) => {
    const data = req.body;
    console.log("Полученные данные:", data);

    // Отправить ответ
    res.status(200).json({ message: 'Данные успешно получены!' });
});

// Обработка GET запроса (получение данных)
app.get('/api/getData', (req, res) => {
    // Здесь можно вернуть какие-то данные для мода
    res.status(200).json({ message: 'Информация о е' });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
