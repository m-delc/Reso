import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Header () {

    
    return (
        (
            <header>
              <h1>
                <span className="logo">"//"</span>
                <Link to="/">Home Page</Link>
              </h1>
              <nav>
                <NavLink className="button" to="/Form">
                  Form
                </NavLink>
                <NavLink className="button" to="/projects/new">
                  Add Project
                </NavLink>
                {/* <button>Test1</button>
                <button onClick={() => navigate('./Form')}>test2</button> */}
              </nav>
            </header>
          )
    )

}

