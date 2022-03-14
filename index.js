const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.use(express.json())
const routes = require('./src/Routes')

app.use('/api/v1/', routes)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})