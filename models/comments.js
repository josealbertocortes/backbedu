const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comment', {
    idUser: {
        type: DataTypes.VARCHAR(50),
        allowNull: false
    },
    idMovie: {
        type: DataTypes.VARCHAR(50),
        allowNull: false
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});




module.exports = Comment;