const port = 3009;

const bodyParser = require('body-parser')
const express = require('express')
const server = express();
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)


server.listen(port, () => {
    console.log('rodandooooo ' + port)

})

module.exports = server