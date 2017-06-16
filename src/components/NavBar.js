import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
  return (
    <nav className={`navbar navbar-${props.style}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to="/treatments" className='navbar-brand'>{props.title}</Link>
        </div>
      </div>
    </nav>
  )
}
