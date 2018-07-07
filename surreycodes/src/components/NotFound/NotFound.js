import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="NotFound">
      <p>
        Oops! The page you requested does appear to exist in our website! click{' '}
        <Link to="/">here</Link> to go to the home page.
      </p>
    </div>
  )
}

export default NotFound
