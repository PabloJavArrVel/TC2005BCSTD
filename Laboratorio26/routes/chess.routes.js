const express = require('express');
const router = express.Router();

const chessController = require('../controllers/chess.controler.js');
const userController = require('../controllers/user.controller');

router.get('/home', chessController.get_index);
router.post('/home', chessController.post_index);
router.get('/login', userController.get_login);
router.get('/signup', userController.get_signup);
router.post('/signup',userController.post_signup);
router.get('/games/:id',chessController.get_game);

module.exports = router;