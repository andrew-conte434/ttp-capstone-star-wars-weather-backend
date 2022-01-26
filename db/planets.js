const { finalizeSession } = require('pg/lib/sasl')
const Sequelize = require('sequelize')
const db = require('./database')

const Planet = db.define('planet', {
    //name, description, imageUrl
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    imageUrl : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    min_temp : {
        type : Sequelize.INTEGER,
        defaultValue : 273,
        allowNull : false
    },
    max_temp : {
        type : Sequelize.INTEGER,
        defaultValue : 273,
        allowNull : false
    },
    min_humidity : {
        type : Sequelize.INTEGER,
        defaultValue : 50,
        allowNull : false
    },
    max_humidity : {
        type : Sequelize.INTEGER,
        defaultValue : 50,
        allowNull : false
    },
    min_clouds : {
        type : Sequelize.INTEGER,
        defaultValue : 50,
        allowNull : false
    },
    max_clouds : {
        type : Sequelize.INTEGER,
        defaultValue : 50,
        allowNull : false
    },
    windy : {
        type : Sequelize.BOOLEAN,
        defaultValue : 50,
        allowNull : false
    },
    fog : {
        type : Sequelize.BOOLEAN,
        defaultValue : false,
        allowNull : false
    },
    rain : {
        type : Sequelize.BOOLEAN,
        defaultValue : false,
        allowNull : false
    }
})

module.exports = Planet