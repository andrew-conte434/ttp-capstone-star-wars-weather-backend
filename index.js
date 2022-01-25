const express = require('express')
const morgan = require('morgan')
const { db } = require('./db')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', require('./api/index'))

db.sync().then(() =>{
    console.log('db synced')
    app.listen(PORT, () =>
        console.log(`App is running on port: ${PORT}`)
    )
})