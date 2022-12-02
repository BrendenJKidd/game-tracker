import axios from 'axios'

const API_URL = '/api/games/'

// Create new game
const createGame = async (gameData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, gameData, config)

  return response.data
}

// Get user games
const getGames = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user game
const deleteGame = async (gameId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + gameId, config)

  return response.data
}

const gameService = {
  createGame,
  getGames,
  deleteGame,
}

export default gameService