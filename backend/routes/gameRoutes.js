const express = require('express')
const router = express.Router()
const { 
  getGames,
  addGame,
  updateGame,
  deleteGame,
} = require('../controllers/gameController')

const {protect} = require('../middleWare/authMiddleware')

router.route('/').get(protect, getGames).post(protect, addGame)
router.route('/:id').put(protect, updateGame).delete(protect, deleteGame)

module.exports = router