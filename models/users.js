/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../db/index');

var users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    name: {
        type: Sequelize.CHAR,
        allowNull: true
    },
    psw: {
        type: Sequelize.CHAR,
        allowNull: true
    }
}, {
    tableName: 'users'
});

module.exports = users;
