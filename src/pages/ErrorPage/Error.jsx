import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error'>
      <h1>Error</h1>
      <Link to="/" className='back'>Back to home page</Link>
    </div>
  )
}

export default Error