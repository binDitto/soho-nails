const mongoose = require('mongoose');
const config = require('../config/database');

// SERVICES SCHEMA

const ServiceSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number,
        required: true

    },
    description: {
        type: String,
        required: true
    }
});

const Service = module.exports = mongoose.model('Service', ServiceSchema);



module.exports.getServiceById = function(id, callback){
    Service.findById(id, callback);
}

module.exports.getServiceByName = function(serviceName, callback){
    const query = {name: serviceName};
    Service.findOne(query, callback);
}

module.exports.addService = function(newService, callback){
    newService.save(callback);
}
