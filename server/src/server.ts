// const mongoose = require('mongoose');
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');
import express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const Data = require('./data');

const API_PORT = 5000;
const app = express();
app.use(cors());

let tasks = require('./tasks');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(
            `SELECT ID, USERNAME, PASSWD FROM USERS`
        );
        console.log(result.rows);

        let sql = `INSERT INTO USERS VALUES (:1, :2, :3)`;

        let binds = [
            [101, "Alpha", "alpha"],
            [102, "Beta", "beta" ],
            [103, "Gamma", "gamma" ]
        ];

// For a complete list of options see the documentation.
        let options = {
            autoCommit: true,
            // batchErrors: true,  // continue processing even if there are data errors
            bindDefs: [
                { type: oracledb.NUMBER },
                { type: oracledb.STRING, maxSize: 20 },
                { type: oracledb.STRING, maxSize: 20 }
            ]
        };

        let resultE = await connection.executeMany(sql, binds, options);

        console.log("Number of rows inserted:", resultE.rowsAffected);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// // Set up home route
// app.use('/', (req, res) => {
//     res.send("This is the homepage");
// })

const Quote = require('inspirational-quotes');
app.get("/", function(req, res) {
    console.log("test");
    res.send(Quote.getQuote());
});

// // Set up task route
// app.use('/tasks', tasks);
//
// // append /api for our http requests
// app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));