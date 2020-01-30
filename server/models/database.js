// do not modify this file
const config = require('../config/config.json')
const Sequelize = require('sequelize')

module.exports = new Sequelize(config.database, config.username, config.password, config)
