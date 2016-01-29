var express = require('express');
var router = express.Router();
var pincontroller = require('../controllers/pincontroller');

router.get('/:username', pincontroller.userPins);

module.exports = router;