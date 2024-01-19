import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='NavBar'> 
    <h1>NavTitle</h1>
    <ul>
        <li> <Link to={"/"} > Home </Link> </li>
        <li> <Link to={"/contact"} > Contact </Link> </li>
        <li> <Link to={"/users"} > Users </Link>  </li>
    </ul>
    </div>
  )
}

export default Navbar