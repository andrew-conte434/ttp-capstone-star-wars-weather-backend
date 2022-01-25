const Sequelize = require('sequelize')
const pkg = require('../package.json')

const heroku = "postgres://sbhbkigdavdnyg:556298d0b0b7297c4cb0c679158c6cea269f5bc9507301030553411db0cda73c@ec2-3-224-157-224.compute-1.amazonaws.com:5432/db5d8gcn4jgmt9"
const db = new Sequelize(
    heroku || `postgres://postgres:sql123@localhost:5432/${pkg.name}`,
    {
        dialect:  'postgres',
        protocol: 'postgres',
        logging : false
    }
)
console.log("hello world", db)
module.exports = db