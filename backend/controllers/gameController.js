const asyncHandler = require('express-async-handler')
const gameModel = require('../models/gameModel')

const Game = require('../models/gameModel')
const User = require('../models/userModel')

// @ desc Get games
// @ route GET /api/games
// @ access Private
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({ user: req.user.id })

  res.status(200).json(games)
})

// @ desc Add game
// @ route POST /api/games
// @ access Private
const addGame = asyncHandler(async (req, res) => {
  const game = await Game.create({
    user: req.user.id,
    title: req.body.title,
    releaseDate: req.body.release,
  })

  res.status(200).json(game)
})

// @ desc Update game
// @ route PUT /api/games/:id
// @ access Private
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if(!game) {
    res.status(400)
    throw new Error('Game not found')
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches game user
  if(game.user.toString() !==user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body,
    {
      new: true,
    })

  res.status(200).json(updatedGame)
})

// @ desc Delete game
// @ route DELETE /api/games/:id
// @ access Private
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if(!game) {
    res.status(400)
    throw new Error('Game not found')
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches game user
  if(game.user.toString() !==user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await game.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGames,
  addGame,
  updateGame,
  deleteGame,
}