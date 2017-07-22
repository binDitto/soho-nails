const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Service = require('../models/service');

router.post('/new', (req, res, next) => {
    let newService = new Service({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    Service.addService(newService, (err, service) => {
        if(err) {
            res.json({success: false, msg: 'Failed to add service'});
        } else {
            res.json({success: true, msg: 'Service created'});
        }
    });
});

router.get('/', (req, res, next) => {



});

module.exports = router;