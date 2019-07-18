const express = require('express')
const app = express()
const cors = require('cors')

const port = 3200

app.use(cors())

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname +  '/styles.css')
})

app.get('*', (req, res) => {
    console.log('server up html')
    res.sendFile(__dirname +  '/index.html')
})

app.listen(port, console.log(`listening on port${port}`))