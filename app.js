const dotenv = require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/', routes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      return res.status(403).send({
        success: false,
        message: 'Not authorized'
      });
    }
  });

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server listing on PORT 3000");
});
