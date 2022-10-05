const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comment', {
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