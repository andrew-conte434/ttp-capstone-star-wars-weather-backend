const Sequelize = require('sequelize')
const pkg = require('../package.json')

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://postgres:sql123@localhost:5432/${pkg.name}`,
    {
        logging : false
    }
)

module.exports = db