const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// User Registration - no need to add /users/register because this file is already associated with /users path

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// USER AUTHENTICATION
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATION');
});

// USER PROFILE
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;