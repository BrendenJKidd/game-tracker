import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGame } from '../features/games/gameSlice'

function GameForm(props) {
  const [formData, setFormData] = useState({
    title: '',
    series: '',
    developer: '',
    publisher: '',
    releaseDate: '',
    platform: '',
    status: '',
  })

  const { title, series, developer, publisher, releaseDate, platform, status, } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const gameData = {
        title,
        series,
        developer,
        publisher,
        releaseDate,
        platform,
        status,
      }

      dispatch(createGame(gameData))
      dispatch(props.handleClick)
  }

  return (
    <div className="game-form">
        <form onSubmit={ onSubmit }>
          <div className="form-boxes">
            <div className="form-title">
              <label htmlFor='text'>Titleaaaaaaaaaaaaa </label>
              <input 
                type='text' 
                id='title' 
                name='title' 
                value={ title } 
                onChange={ onChange }
              />
            </div>
            <div className="form-series">
              <label htmlFor='text'>Series </label>
              <input 
                type='text' 
                id='series' 
                name='series' 
                value={ series }
                onChange={ onChange }
              />
            </div>
            <div className="form-developer">
              <label htmlFor='text'>Developer </label>
              <input 
                type='text' 
                id='developer' 
                name='developer' 
                value={ developer }
                onChange={ onChange }
              />
            </div>
            <div className="form-publisher">
              <label htmlFor='text'>Publisher </label>
              <input 
                type='text' 
                id='publisher' 
                name='publisher' 
                value={ publisher }
                onChange={ onChange }
              />
            </div>
            <div className="form-releaseDate">
              <label htmlFor='text'>Release Date </label>
              <input 
                type='date' 
                id='releaseDate' 
                name='releaseDate' 
                value={ releaseDate }
                onChange={ onChange }
              />
            </div>
            <div className="form-platform">
              <label htmlFor='text'>Platform </label>
              <input 
                type='text' 
                id='platform' 
                name='platform' 
                value={ platform }
                onChange={ onChange }
              />
            </div>
            <div className="form-status">
              <label htmlFor='text'>Status </label>
              <select 
              value={ status } 
              id="status" 
              name="status" 
              onChange={ onChange }
              >
                <option value="Unowned">Unowned</option>
                <option value="Owned">Owned</option>
                <option value="Clear">Clear</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
         </div>
         <div className="form-buttons">
          <button type='submit'>Submit</button>
          <button onClick={props.handleClick}>Cancel</button>
         </div>
        </form>
    </div>
  )
}

export default GameForm