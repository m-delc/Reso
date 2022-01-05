import React from 'react';

export default function Header () {

    
    return (
        (
            <header>
              <h1>
                <span className="logo">"//"</span>
                screw off
              </h1>
              <nav>
                <a className="button" href="/Form">
                  Form
                </a>
                <a className="button" href="/projects/new">
                  Add Project
                </a>
                {/* <button>Test1</button>
                <button onClick={() => navigate('./Form')}>test2</button> */}
              </nav>
            </header>
          )
    )

}

