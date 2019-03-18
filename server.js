var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
const db = require("./models");

// Setting up the Express App, assigning port
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up Body Parser
app.use(express.urlencoded({
	extended: false
}));

// Setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use('/', require('./controllers/burgersController'));

// Setting up static directory
app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync({
	force: false
}).then(function() {
	app.listen(PORT, function() {
		console.log(`INFO: Application is running on port: ${PORT}`);
	});
});