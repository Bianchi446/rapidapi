var express = require('express');
var router = express.Router();
var users = require('../data/user.js'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(users); 
});

module.exports = router;
