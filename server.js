const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Для парсинга JSON запросов
app.use(bodyParser.json());

// Создаем глобальную переменную для хранения данных
let storedData = "Initial data";

// Экспортируем переменную для использования в других файлах
module.exports.storedData = storedData;

// Экспортируем функцию для изменения данных
module.exports.setData = (newData) => {
  storedData = newData;
};



// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
