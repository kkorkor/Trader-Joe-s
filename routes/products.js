const express = require('express');
const {  productsCtrlFunction } = require('../controllers/productsCtrlFiles');



const router = express.Router();

router.get('/', productsCtrlFunction );



module.exports = router;