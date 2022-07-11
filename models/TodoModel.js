const Sequelize = require('sequelize');
const sequelize = require('../db');

const Todo = sequelize.define('todos', {
  id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  todoTitle: {type: Sequelize.STRING, allowNull: false},
  todoDesc: {type: Sequelize.TEXT, allowNull: false},
  todoComplete: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
});

module.exports = Todo;