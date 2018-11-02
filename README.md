# FriendFinder
Week 13 Express and Node Assignment

## Description

What kind of Board Gamer are you? This "Friend Finder" application has the user take a survey of 10 questions. Those responses are then compared against a list of gamer personality types and presented to the user. User is then given a modal with a description of their "type", which also includes their Best Experience, Worst Experience and a list of games they would likely enjoy.

The application demonstrates the ability to use [Express](https://expressjs.com/) with a [Node.js](https://nodejs.org/en/) server on the back end and the [Materialize](http://materializecss.com/) CSS framework on the front end.

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://friendfinder-mankin.herokuapp.com/).

- What is the direct link to the project?
  * The code is hosted here: [FriendFinder](https://github.com/JoseaphMankin/FriendFinder).

![Alt text](app/public/images/FriendFinderScreen.jpg?raw=true "FriendFinder Screenshot")

## Installation

To install the application follow the instructions below:

	git clone https://github.com/JoseaphMankin/FriendFinder.git
	cd FriendFinder
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8080
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3030`.