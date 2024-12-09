import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className='sidebar'>
      <nav>

        <h1>Logo</h1>

        <p>Menu</p>

        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/members">Members</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/borrow">Borrow</NavLink></li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar