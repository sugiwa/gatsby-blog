import React from 'react'
import {Link}from 'gatsby'

export default () =>(
    <header className="header">
    <div className="container">
      <div className="site">
        <Link to={'/'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='225.65'
            height='46.59'
          >
              <defs></defs>
              <desc>ESSENTIALS</desc>
              <path
                fill='#477294'
                d='M52.6 25.36h8 2.33-2.33z' 
              />
          </svg>
        </Link>
      </div>
      
      <nav className="nav">
        <ul>
          <li><Link to={"/"}>TOP</Link></li>
          <li><Link to={"/about"}>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)