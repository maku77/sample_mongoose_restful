var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/memodb';

// Create models.
var MemoSchema = new mongoose.Schema({
    title: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Memo = mongoose.model('Memo', MemoSchema);

// Error handlers.
mongoose.connection.on('error', function (err) {
    console.log('ERROR:', err.message);
});

// Connect to the DB.
mongoose.connect(DB_URL);

// Create sample data.
Memo.count(function (err, count) {
    if (count > 0) {
        return;
    }
    Memo.create({title: 'Title 1'}, function() {});
    Memo.create({title: 'Title 2'}, function() {});
    Memo.create({title: 'Title 3'}, function() {});
});

// Export interfaces.
exports.Memo = Memo;

