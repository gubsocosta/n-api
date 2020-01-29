const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/n-api', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;