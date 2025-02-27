const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());  // Для обработки JSON в теле запроса


// Создаем глобальную переменную для хранения данных
let storedData = "Initial data";

// Экспортируем переменную для использования в других файлах
module.exports.storedData = storedData;

// Экспортируем функцию для изменения данных
module.exports.setData = (newData) => {
  storedData = newData;
};

// Функция для получения текущих данных
module.exports.getData=()=>{
  return storedData;//Возвращаем текущее значение переменной
};

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
