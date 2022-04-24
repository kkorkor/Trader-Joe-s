const express = require('express');
const { checkoutCtrlFunction } = require('../controllers/checkoutCtrlFile.js');

const router = express.Router();

router.post('/', checkoutCtrlFunction);


module.exports = router;