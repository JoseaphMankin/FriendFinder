let path = require('path');
//Require the Friend Array from friends.js
let friendData = require("../data/friends");

//API ROUTES - a GET and POST to the friends.js array.

module.exports = function (app) {
    // API GET Requests to be able to see all the data in Friends.js in json form
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


	// API POST a new friend entry
	app.post("/api/friends", function(req, res) {
        // Capture the user input object
        
		let userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		let userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);

		// Compute best friend match
		let matchName = '';
		let matchImage = '';
		let totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (let i = 0; i < friendData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friend[i]));

			// Compute differenes for each question
			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendData[i].scores[j] - userResponses[j]);
			}
		
			if (diff < totalDifference) {
		
				totalDifference = diff;
				matchName = friendData[i].name;
				matchImage = friendData[i].photo;
			}
		}

		// Add new user
		friendData.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};