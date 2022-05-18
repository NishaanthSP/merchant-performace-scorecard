const express = require('express');
const {get_healthz, get_login, login} = require('../controllers');
const router = express.Router();

router.get('/healthz', get_healthz);
router.get('/login', get_login);

router.post('/login', login);

module.exports = router;