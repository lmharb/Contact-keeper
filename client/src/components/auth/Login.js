import React, { useState, useContext, useEffect } from "react"
import AuthContext from "../../context/auth/authContext"
import AlertContext from "../../context/alert/alertContext"
import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert, alerts } = alertContext

  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger", 3000)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, navigate])

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger")
    } else {
      login({
        email,
        password,
      })
    }
  }

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
          required
        />
      </form>
    </div>
  )
}

export default Login
