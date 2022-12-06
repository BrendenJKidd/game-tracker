import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GameForm from '../components/GameForm'
import GameItem from '../components/GameItem'
import SNES from '../components/SNES'
import { getGames, reset } from '../features/games/gameSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { games, isLoading, isError, message } = useSelector((state) => state.games)

  const [isShown, setIsShown] = useState(false)



  function handleClick() {
    setIsShown(!isShown)
  }

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getGames())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <faSpinner/>
  }

  function byTitle(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  }

  function byReleaseDate(a, b) {
    if (a.releaseDate> b.releaseDate) {
      return 1;
    } else if (a.releaseDate < b.releaseDate) {
      return -1;
    } else {
      return 0;
    }
  }

  const sortedGames= [...games]

  console.log(sortedGames.sort(byTitle))
  
  return (
    <div className="dashboard">
    {isShown && 
                <div className="form-container">
                  <GameForm 
                    isShown={isShown}
                    handleClick={handleClick}
                  />
                </div>}
      <div className="SNES-container">
        <SNES />
      </div>
      
      <div className="add-game">
        <p>Add Game</p>
        <button onClick={handleClick}>+</button>
        <label htmlFor='text'>Sort By </label>
              <select  
              id="status" 
              name="status" 
              >
                <option value="Unowned">Unowned</option>
                <option value="Owned">Owned</option>
                <option value="Clear">Clear</option>
                <option value="Complete">Complete</option>
              </select>
      </div>

      <section>
        {games.length > 0 ? (
          <div>
            <div className='table-labels'>
              <div>
                <h6>Title</h6>
              </div>
              <div>
                <h6>Series</h6>
              </div>
              <div>
                <h6>Release Date</h6>
              </div>
              <div>
                <h6>Publisher</h6>
              </div>
              <div>
                <h6>Platform</h6>
              </div>
              <div>
                <h6>Status</h6>
              </div>
          </div>
            {sortedGames.map((game) => (
              <GameItem key={game._id} game={game}/>
            ))}
          </div>
        ) : (
          <h3>You have no games... click the "Add Game" button to get started collecting!</h3>
        )}
      </section>
    </div>
  )
}

export default Dashboard