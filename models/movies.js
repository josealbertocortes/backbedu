const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Comment = require('./comments');

const Movie = sequelize.define('Movie', {
    name: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
        unique: true
    },
    genre: {
        type: DataTypes.VARCHAR(50),
        allowNull: false
    },
    synopsis:{
        type: DataTypes.VARCHAR(50),
        allowNull: false,
    },
});

Movie.hasMany(Comment,{
    foreignKey: 'idMovie'
});
Comment.belongsTo(Movie);

module.exports = Movie;