//Require the Friend Array from friends.js
let friendData = require("../data/friends");

//API ROUTES - a GET and POST to the friends.js array.

module.exports = function (app) {
    // API GET Requests to be able to see all the data in Friends.js in json form
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests to save down to the friendData array)
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });
};
