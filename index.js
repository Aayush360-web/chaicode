const express = require('express')
const app = express()
require('dotenv').config()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('<h2>Please login to our website </h2>'
    )
})
app.listen(process.env.PORT , () => {
    console.log(`Example app listening on port ${port}`)
})
