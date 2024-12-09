import React from 'react'

import '../css/navbar.css'
import { NavLink } from 'react-router-dom';

const Header = ( { current_page } ) => {

  // TODO: CONNECT USER DATASE HERE
  const user_avatar = "";
  const user_name = "Username";

  return (
    <header>
      <div>
        <h1>{current_page}</h1>

        <div className="user">
          <p>{user_name}</p>
          <div className="user_img">
            <img src={user_avatar} alt="" />
          </div>

          
          <NavLink to="/">Exit</NavLink>
        </div>
        
      </div>
    </header>
  )
}

export default Header