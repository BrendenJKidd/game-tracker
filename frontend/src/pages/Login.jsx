import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to see your games</p>
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
          />
          <input 
            type='password' 
            id='password' 
            name='password' 
            value={password} 
            placeholder='Password' 
            onChange={onChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login