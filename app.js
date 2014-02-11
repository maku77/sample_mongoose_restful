var memos = require('./routes/memos');
var express = require('express');
var app = express();

// Setup middlewares
app.use(express.bodyParser());  // Handle POST messages

// RESTful CRUD APIs
app.post('/memos', memos.createMemo);     // [C]REATE
app.get('/memos', memos.readAllMemos);    // [R]EAD
app.get('/memos/:id', memos.readMemo);    // [R]EAD
app.put('/memos/:id', memos.updateMemo);  // [U]PDATE
app.del('/memos/:id', memos.deleteMemo);  // [D]ELETE

// Start a server
app.listen(5000, function() {
    console.log('Listening on port 5000');
});
