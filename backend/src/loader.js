const server  = require('./config/server')
require('../src/config/database')

require('./config/routes')(server)