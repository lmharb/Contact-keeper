import React, { Fragment } from "react"
import Navbar from "./components/layout/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

import ContactState from "./context/contact/ContactState"
import AuthState from "./context/auth/AuthState"
import "./App.css"

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='*' element={<NotFound />} /> */}
              </Routes>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
