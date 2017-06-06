// ANY CHANGES TO THIS FILE WILL REQUIRE A SERVER REFRESH OR RESTART
// USE NODEMON BY DOING | SUDO NPM INSTALL -G NODEMON | TO INSTALL NODEMON GLOBALLY
// USE COMMAND -- nodemon -- TO AUTOMATICALLY FOLLOW UP CHANGES ON THIS NODE SERVER
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const passport = require('passport');
const mongoose = require('mongoose');

// INITIALIZE APP
const app = express();

const users = require('./routes/users');

// CONNECT THE DATABASE
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (error) => {
    console.log('Database error: ' + error);
});


// PORT
const port = 3000;

// CORS MIDDLEWARE - allows making request to api from different domain name || CHECK DOCUMENTATION FOR MORE INFO
app.use(cors());

// SET STATIC FOLDER 
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER MIDDLEWARE - PARSER FORM DATA TO JSON SO WE CAN USE IT
app.use(bodyParser.json());

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//  USER ROUTES - routes after '/' have to go before '/' 
app.use('/users', users);

// INDEX ROUTE
app.get('/', (req, res) => {

    res.send('Invalid Endpoint');
});


// RUN SERVER, type npm start in terminal because "start" in package.json set to run this file, OR TYPE NODEMON TO DO THIS AUTOMATICALLY
app.listen(port, () => {
    console.log('Server started on port ' + port);
});





