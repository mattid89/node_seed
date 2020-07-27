var Sequelize = require('sequelize');
var { config } = require('../configs/config');

var sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password, {
    host: config.db.host,
    dialect: 'mssql',
    // operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    },
    dialectOptions: {
        requestTimeout: 60000,
        instanceName: config.db.instanceName
    },
    timezone: '-03:00'
}
);

module.exports = sequelize;