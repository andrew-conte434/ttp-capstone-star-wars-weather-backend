const Sequelize = require('sequelize')
const pkg = require('../package.json')

const db = new Sequelize(
    process.env.DATABASE || `postgres://postgres:sql123@localhost:5432/${pkg.name}`,
    {
        dialect:  'postgres',
        protocol: 'postgres',
        logging : false
    }
)

module.exports = db