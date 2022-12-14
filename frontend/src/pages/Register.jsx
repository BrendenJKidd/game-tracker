import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="login-page">
      <section>
        <h1 className="big-login">
          <FaUser /> Register
        </h1>
        <p className="login-caption">Please create an account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <input 
            type='text' 
            id='name' 
            name='name' 
            value={name} 
            placeholder='Username' 
            onChange={onChange}
            className="email"
          />
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
            className="email"
          />
          <input 
            type='password' 
            id='password2' 
            name='password2' 
            value={password2} 
            placeholder='Confirm password' 
            onChange={onChange}
            className="email"
          />
          <button type='submit' className="login-submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Register