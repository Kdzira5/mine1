// /api/getData.js

const server=require('./server');// Импортируем переменную и функции из server.js

module.exports = (req, res) => {
  const data=server.storedData;//Получаем данные из глобальной переменной 
  
  // Логика обработки GET-запроса
  const responseData = {
    message: 'Информация о моде',
    modDetails: { message:'Данные успешно получены',storedData:data},
  };

  // Отправляем данные в виде JSON-ответа
  res.status(200).json(responseData);
};
