import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="login-page">
      <section>
        <h1 className="big-login">
          <FaSignInAlt /> Login
        </h1>
        <p className="login-caption">Login to see your games</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <input 
            type='email' 
            id='email' 
            name='email' 
            value={email} 
            placeholder='Email' 
            onChange={onChange}
            className="email"
          />
          <input 
            type='password' 
            id='password' 
            name='password' 
            value={password} 
            placeholder='Password' 
            onChange={onChange}
            className="password"
          />
          <button type='submit' className="login-submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Login