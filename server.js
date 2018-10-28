//DEPENDANCIES: 

let express = require("express");
let bodyParser = require("body-parser");

//EXPRESS SETUP:

// Tells node that we are creating an "express" server
let app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Have access to the public folder and CSS file. 
app.use(express.static(__dirname + "/app/public/"));

//ROUTER PATHS:

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER to start server:

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
