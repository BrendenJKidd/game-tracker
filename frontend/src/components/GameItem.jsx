import { useDispatch } from 'react-redux'
import { deleteGame } from '../features/games/gameSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function GameItem({ game, filterValue }){
  const dispatch = useDispatch()

  if (filterValue === "all" || filterValue === game.status) { 

    console.log(filterValue)
    return (
      <div className='game-item'>
        <div className="art">
          <img></img>
        </div>
        <div className="game-elements">
          <div>
            <h2>{game.title}</h2>
          </div>
          <div className="game-info">
            <h3>{game.series}</h3>
            <h5>{game.releaseDate}</h5>
            <h7>{game.publisher}</h7>
            <h6>{game.platform}</h6>
          </div>
          </div>
          <div className="status">
            <h4>{game.status}</h4>
          </div>
            <div className="item-icons">
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
  }

export default GameItem