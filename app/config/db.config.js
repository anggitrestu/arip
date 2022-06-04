module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  port: process.env.DB_PORT,

  HOST_2 : process.env.DB_HOST_2,
  USER_2 : process.env.DB_USER_2,
  PASSWORD_2 : process.env.DB_PASSWORD_2,
  DB_2 : process.env.DB_NAME_2,
  port_2 : process.env.DB_PORT_2,

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};