// DEPENDENCIES of Path to handle routing to html pages
let path = require("path");

//ROUTES - Two GET routes for the 2 html pages in the Public Folder
//one for survey and one to catch anything else and send to Home

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
