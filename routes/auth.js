const express = require('express');
const {auth_success, remove_user} = require('../controllers/auth');
const router = express.Router();

router.get('/', auth_success);
// router.delete('/user', remove_user);
router.get('/test', (req,res) => res.json({"GET":"test"}));
router.post('/test', (req,res) => res.json({"POST":"test"}));

module.exports = router;