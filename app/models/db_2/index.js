const dbConfig = require('../../config/db.config.js');
const Sequelize = require('sequelize');

const sequelize_2 = new Sequelize(
  dbConfig.DB_2,
  dbConfig.USER_2,
  dbConfig.PASSWORD_2,
  {
    host: dbConfig.HOST_2,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db_2 = {};

db_2.Sequelize = Sequelize;
db_2.sequelize = sequelize_2;

db_2.users = require('./user.model.js')(sequelize_2, Sequelize);

module.exports = db_2
