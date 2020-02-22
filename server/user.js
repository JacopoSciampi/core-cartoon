const Sequelize = require('sequelize');
const query = require('./database');

query.CreateUser = async (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        body = JSON.parse(body);
        if (!body || !body.username || !body.password) {
            res.status(500);
            return res.send({
                "error": 'Server error: cannot parse the body',
                "errorCode": 500,
                "timestamp": new Date().getTime(),
                "fullDate": new Date()
            });
        }

        const dateNow = new Date().toLocaleString();

        query.query('INSERT INTO users (username, password, date_reg) VALUES ($1, $2, $3)', [body.username, body.password, dateNow], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User added`)
        })
    });
}

module.exports = query;