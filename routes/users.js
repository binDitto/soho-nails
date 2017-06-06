const express = require('express');
const router = express.Router();

// User Registration - no need to add /users/register because this file is already associated with /users path

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

// USER AUTHENTICATION
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATION');
});

// USER PROFILE
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// USER VALIDATION
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});


module.exports = router;