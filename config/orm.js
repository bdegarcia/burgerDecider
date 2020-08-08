const connection = require("./connection");

const questionMarks = (values) => values.map(() => "?").toString();

const orm = {
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, cols, values, cb) {
        let query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks(values)})`;
        connection.query(query, values, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, condition, cb) {
        let query = `UPDATE ${table} SET devoured = 1 WHERE ${condition}`;
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;