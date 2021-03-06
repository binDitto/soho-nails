const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// USER SCHEMA

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true

    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}

// THIS IS GONNA TAKE THE PASSWORD AND ENCRYPT IT INTO A HASH BEFORE SAVING IT
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// IN ROUTES USERS /AUTHENTICATION - function comparePassword created below
module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}