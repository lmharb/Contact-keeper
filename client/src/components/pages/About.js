import React from "react"

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app for keeping contacts inspired by Brad
        Traversy's course.
      </p>
      <h2 className='my-1' style={{ textAlign: "left" }}>
        More about this App:
      </h2>
      <ul>
        <li>- React CRUD App</li>
        <li>- REST API to manage contacts </li>
        <li>- Registration & Authentication (JSONWebToken)</li>
      </ul>
      <h2 className='my-1' style={{ textAlign: "left" }}>
        Technologies:
      </h2>
      <ul>
        <li>- Javascript, ReactJS, NodeJS, Express, MongoDB</li>
        <li>- React-router-dom (v6), React-transition-group </li>
      </ul>
      <div className='my-1'>
        <p className='bg-dark p'>
          <strong>Version: </strong>1.0.0
        </p>
      </div>
    </div>
  )
}

export default About
