const sequelize = require('./db');
const app = require('./app');

try {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection to the DB established');
      app.listen(4000);
    });
} catch (err) {
  console.log(err);
}