const app = require('./configs/express').app;
require('./middleware/mongoose.connect')('UserDB');
const bodyParser = require('body-parser');
const path = require('path');
const util = require('./helpers/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const normalizedPath = path.join(__dirname + `\\routes`);

const routes = util.getFileExports(normalizedPath);

app.use('/api/', routes);
