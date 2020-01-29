const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost/n-api', { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
} catch(err) {
    console.log(err);
}
