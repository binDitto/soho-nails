const express = require('express');
const router = express.Router();

// User Registration - no need to add /users/register because this file is already associated with /users path

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

module.exports = router;