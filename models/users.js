const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Comment = require('./comments')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.VARCHAR(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.VARCHAR(50),
        allowNull: false
    },
    email:{
        type: DataTypes.VARCHAR(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: true,
    }
});
//Relación
User.hasMany(Comment,{
    foreignKey: 'idUser'
});
Comment.belongsTo(User);
module.exports = User;