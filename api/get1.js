// /api/get1.js

const mongoose = require('mongoose');

module.exports = (req, res) => {
  const dbName = 'minecraftMod';  // Имя базы данных для проверки

  // Проверяем все базы данных на сервере
  mongoose.connection.db.admin().listDatabases((err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при проверке базы данных' });
    }

    // Ищем нужную базу данных в списке
    const databases = result.databases;
    const dbExists = databases.some(db => db.name === dbName);

    if (dbExists) {
      res.status(200).json({ message: `База данных "${dbName}" существует!` });
    } else {
      res.status(404).json({ message: `База данных "${dbName}" не существует.` });
    }
  });
};
