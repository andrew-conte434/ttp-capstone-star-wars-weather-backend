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
    }
})

module.exports = Planet