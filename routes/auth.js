const { register, login } = require('../controllers/auth');
const express = require('express');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
