const express = require('express');
const router = express.Router();

const chessController = require('../controllers/chess.controler.js');

router.get('/', chessController.get_index);
router.get('/games/:id',chessController.get_game);

module.exports = router;