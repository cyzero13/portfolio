import React from 'react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
        <a href='./'>
            <img src='./images/nav-logo.png' alt="nav-logo" className="md:w-24 w-20"/>
        </a>
    </nav>
  )
}

export default Navigation