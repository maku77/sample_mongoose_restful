/**
 * A route definition for /memos.
 */
var memodb = require('../memodb');

// CREATE
exports.createMemo = function (req, res) {
    var memo = req.body;
    memodb.Memo.create(memo, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'A new memo has been created'});
    });
};

// READ
exports.readAllMemos = function (req, res) {
    memodb.Memo.find(function (err, memos) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json(memos);
    });
};

// READ
exports.readMemo = function (req, res) {
    var id = req.params.id;
    memodb.Memo.findById(id, function (err, memo) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json(memo);
    });
};

// UPDATE
exports.updateMemo = function (req, res) {
    var id = req.params.id;
    var memo = req.body;
    memodb.Memo.findByIdAndUpdate(id, memo, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The memo has been updated'});
    });
};

// DELETE
exports.deleteMemo = function (req, res) {
    var id = req.params.id;
    memodb.Memo.findOneAndRemove({_id: id}, function (err) {
        if (err) {
            res.json({error: err.message});
            return;
        }
        res.json({message: 'The memo has been deleted'});
    });
};
