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

  const [sortValue, setSortValue] = useState(localStorage.getItem("savedSort") ? localStorage.getItem("savedSort") : "title")

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
  }, [user, navigate, isError, message, dispatch, sortValue])

  if(isLoading) {
    return <faSpinner/>
  }

  function byValue(a, b) {
    if (a[sortValue] > b[sortValue]) {
      return 1;
    } else if (a[sortValue] < b[sortValue]) {
      return -1;
    } else {
      return 0;
    }
  }

  const chooseValue = (e) => {
    setSortValue(e.target.value)
    localStorage.setItem("savedSort", sortValue)
  }

  const sortedGames= [...games]
  
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
      
      <div className="top-buttons">
        <div>
          <label htmlFor='text'>Add Game: </label>
          <button onClick={handleClick}>+</button>
        </div>
        <div>
          <label htmlFor='text'>Sort By: </label>
                <select  
                id="sort" 
                name="sort"
                onChange={ chooseValue }
                defaultValue={ sortValue }
                >
                  <option value="title">Title</option>
                  <option value="releaseDate">Release Date</option>
                </select>
        </div>
        <div>
          <label htmlFor='text'>Filter: </label>
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
      </div>

      <section>
        {games.length > 0 ? (
          <div>
            {sortedGames.sort(byValue).map((game) => (
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