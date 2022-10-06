const { Sequelize } = require('sequelize');


  const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.USERNAMEDATA,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });
module.exports = sequelize;