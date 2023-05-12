import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='img'>
            <img src="vite.svg" alt="" width={40} />
        </div>
        <ul>
            <li className='Home'>Home</li>
            <li className='about'>About</li>
            
        </ul>
    </nav>
  )
}

export default Navbar
