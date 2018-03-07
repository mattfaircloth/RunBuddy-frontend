# RunBuddy

You can view the RunBuddy backend here: [click here](https://github.com/mattfaircloth/run-buddy-backend)

RunBuddy is a web app that allows users to find other runners based on their current location. This web application uses the Google Maps and GeoCoding APIs, as well as a custom back-end Rails API. 
Users are able to join or leave workouts, and add and remove friends. When a user creates a new workout, it will be displayed on their friends Map. Users can also see the workouts of friends of friends. 

## Using the application
Once users signup and log in, they can add a friend. Once they have a friend, they will be able to see that friends' workouts on their map. They are then able to join or leave a workout. 

## Installation Instructions
`This web app requires it's backend couterpart`
1. Go to the backend directory
2. run `bundle install` to install the require ruby gems
3. run `rails s - p 3001` to start the rails backend server
4. Go to the frontend directorey
5. run `npm install` to install the required npm packages
6. run `npm start` to start the web app
