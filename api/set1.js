// /api/set1.js
const server=require('../server'); // Импортируем сервер с функциями setData и getData

module.exports=(req,res)=>{
  try{
    const{newData}=req.body; // Получаем новые данные из тела запроса

    if(!newData){// Проверка, что newData передано в запросе
      return res.status(400).json({ message:'Данные не переданы'});
    }
    server.setData(newData);//Сохраняем полученные данные с помощью setData

    // Отправляем успешный ответ
    return res.status(200).json({message:'Данные успешно обновлены!'});
  }catch(error){
    console.error('Ошибка при обновлении данных:',error);
    return res.status(500).json({message:'Ошибка при обновлении данных'});
  }
};
