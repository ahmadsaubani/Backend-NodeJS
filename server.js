var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));


const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});


require('./app/route/Post.js')(app);

// Create a Server
var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})