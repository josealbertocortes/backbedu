const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Comment = require('./comments');

const Movie = sequelize.define('Movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Movie.hasMany(Comment,{
    foreignKey: 'idMovie'
});
Comment.belongsTo(Movie);

module.exports = Movie;