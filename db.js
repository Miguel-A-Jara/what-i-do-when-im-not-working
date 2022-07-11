const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', 'Asuncion1', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.sync({alter: true})
  .then(() => console.log('All the tables are synced'));

module.exports = sequelize;