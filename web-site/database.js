const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://mongo/test';

var kittySchema = mongoose.Schema({
    name: String
});

kitten = exports.kitten = mongoose.model('kitten', kittySchema);

exports.initializeMongo = function() {
    mongoose.connect(DATABASE_CONNECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error connection'));
    db.once('open', function() {
        console.log('we are connectedd you and i');
        addRandomCat();
    });
}
var addRandomCat = function() {
    var silence = new Kitten({
        name: 'silence' + Math.random()
    });

    silence.save(function(err, fluffy) {
        if (err) return console.error(err);
        console.log('there is an error');
    });
}