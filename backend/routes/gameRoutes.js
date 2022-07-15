const express = require('express')
const router = express.Router()
const { 
  getGames,
  addGame,
  updateGame,
  deleteGame 
} = require('../controllers/gameController')

router.route('/').get(getGames).post(addGame)
router.route('/:id').put(updateGame).delete(deleteGame)

module.exports = router