var express = require('express');
var compression = require('compression');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9061;

var router = express.Router();

var routeInit = require('./router.init')(router);
routeInit.registerAll();

app.use('/api', function (req, res, next) {
	console.log(req.method + " received at " + req.originalUrl);
	next();
});
app.use('/api', router);

app.listen(port);
console.log("Starting remote-wol on port " + port);