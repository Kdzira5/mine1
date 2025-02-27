// /api/get1.js

// Импортируем переменную и функции из server.js
const server=require('./server');

const mongoose=require('mongoose');

module.exports=(req,res)=>{

  //Если вы хотите использовать данные из глобальной переменной:
  const data=server.storedData;//Получаем данные из глобальной переменной
  
  //Отправляем данные в ответе
  res.status(200).json({ message:'Данные успешно получены',storedData:data});
};
