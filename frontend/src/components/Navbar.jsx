import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  bookIconAdd,
  borrowIcon,
  dashboardIcon,
  lgo,
  membersIcon,
  resourcesIcon
} from '../assets/icons'

import '../css/navbar.css'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false); 

  const handleToggleNav = () => {
    setOpenNav((prev) => !prev); 
  };

  return (
    <div className={`sidebar ${openNav ? "" : "close-nav"}`} onMouseEnter={handleToggleNav} onMouseLeave={handleToggleNav}>
      <nav>
        <img src={lgo} alt="" />
        
        <NavLink to="/addbook">
          <span>Add Book</span> 
          <img src={bookIconAdd} alt="" />
        </NavLink>

        <p>Menu</p>

        <ul>
          <li>
            <NavLink to="/dashboard">
              <img src={dashboardIcon} alt="" />
              <span>Dashboard</span> 
            </NavLink>
          </li>

          <li>
            <NavLink to="/members">
              <img src={membersIcon} alt="" />
              <span>Members</span> 
            </NavLink>
          </li>

          <li>
            <NavLink to="/resources">
              <img src={resourcesIcon} alt="" />
              <span>Resources</span> 
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="/borrow">
              <img src={borrowIcon} alt="" />
              <span>Borrow</span> 
            </NavLink>
          </li> */}
        </ul>

      </nav>
    </div>
  )
}

export default Navbar