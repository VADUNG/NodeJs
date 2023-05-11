const express = require('express');

const app = express();
const post = 8080

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/about', (req, res) => {
    res.send(`I'm DUng`)
})

app.listen(port, () => {
    console.log('listening on port: ', port)
})