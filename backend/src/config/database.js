const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
mongoose.connection.on('connected', function () {
    console.log('=====Conexão estabelecida com sucesso=====');
   });
module.exports = mongoose.mongo.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')