const asyncHandler = require('express-async-handler')

// @ desc Get games
// @ route GET /api/games
// @ access Private
const getGames = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get games' })
})

// @ desc Add game
// @ route POST /api/games
// @ access Private
const addGame = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Add game' })
})

// @ desc Update game
// @ route PUT /api/games/:id
// @ access Private
const updateGame = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update game ${req.params.id}` })
})

// @ desc Delete game
// @ route DELETE /api/games/:id
// @ access Private
const deleteGame = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete game ${req.params.id}` })
})

module.exports = {
  getGames,
  addGame,
  updateGame,
  deleteGame,
}