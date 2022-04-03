const express = require('express');
const app = express()
const cors = require('cors')
const config = require('./config/config')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const portApp = config.portApp
const portReact = config.portReact

const reactApp = express();
app.use(cors())
reactApp.use(cors())
reactApp.use('/', express.static('../react-books/build'));
const initAPIs = require("./router/management-api");
app.use(express.json());
app.use(bodyParser.json());
app.use(urlencodedParser);

initAPIs(app);

app.listen(portApp, function() {
    console.log('Books server ready on port', portApp);
});

reactApp.listen(portReact, function() {
    console.log('React app ready on port', portReact);
});