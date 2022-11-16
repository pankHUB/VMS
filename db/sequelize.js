const { Sequelize } = require('sequelize');

const user = 'postgres';
const host = 'localhost';
const database = 'user_test';
const password = 'pij@12345';
const port = '5432';

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
});
   

module.exports = sequelize;