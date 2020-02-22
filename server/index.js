const express = require('express');
const user = require('./user');
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;

var corsOptions = {
    origin: '*',

    optionsSuccessStatus: 200
}

app.use(
    bodyParser.urlencoded({
        extended: true
    }),
    cors()
)

app.post('/users', user.CreateUser)

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});