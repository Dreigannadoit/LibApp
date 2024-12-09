import React from 'react'

import "../css/status_blocks.css";

const Status = ( { title, status, imgurl } )  => {
  return (
    <div className="status block total">
        <img src={imgurl} alt="Photo Not Loaded Properly"/>
        <p>{title}</p>
        <h1>{status}</h1>
    </div>
  )
}

export default Status