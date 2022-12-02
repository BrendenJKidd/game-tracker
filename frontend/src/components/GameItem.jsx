import { useDispatch } from 'react-redux'
import { deleteGame } from '../features/games/gameSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function GameItem({ game }){
  const dispatch = useDispatch()

    return (
      <div className='game-item'>
        <div>
        <h2>{game.title}</h2>
        </div>
        <div>
        <h3>{game.series}</h3>
        </div>
        <div>
        <h5>{game.releaseDate}</h5>
        </div>
        <div>
        <h7>{game.publisher}</h7>
        </div>
        <div>
        <h6>{game.platform}</h6>
        </div>
        <div>
        <h4>{game.status}</h4>
        </div>
        <div>
        <FontAwesomeIcon 
          icon={faTrashCan} 
          onClick={() => dispatch(deleteGame(game._id))}
          className="trash"
          />
        <FontAwesomeIcon
          icon={faPen}
          className="edit-icon"
        />
        </div>
      </div>
    )
  }

export default GameItem