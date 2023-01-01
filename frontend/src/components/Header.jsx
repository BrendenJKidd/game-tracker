import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import DarkMode from './DarkMode'
import logo from '../game-tracker-logo.png'

function Header(props) {
const navigate = useNavigate()
const dispatch = useDispatch()
const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className={props.nightmode && "header_dark"}>
      <div className="header-logo">
        <Link to='/' className="game-tracker">
        <img src={logo} className="main-logo"></img>
          Game Tracker</Link>
      </div>
      <div className="header-elements">
      <DarkMode />
      <ul className="user-buttons">
        { user ? (
          <li>
          <button onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
          </li>
        ) : (<>
          <li>
          <Link to ='/login' className="login-buttons">
            <FaSignInAlt /> Login
          </Link>
          </li>
          <li>
            <Link to ='/register' className="login-buttons">
              <FaUser /> Register
            </Link>
          </li>
        </>)}
        
      </ul>
      </div>
    </header>
  )
}

export default Header