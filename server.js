const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// INITIALIZE APP
const app = express();

// PORT
const port = 3000;

// LISTEN ON PORT AND RUN SERVER, type npm start in terminal because "start" in package.json set to run this file
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

