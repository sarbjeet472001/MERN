import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/instagr.png'
import { UserContext } from '../App'
import { useContext } from 'react'

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext);

  const RenderMenu=()=>{
    if(state){
      return (
        <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/"><span className='text-white'>Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About"><span className='text-white'>About</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"><span className='text-white'>Contact</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Logout"><span className='text-white'>Logout</span></NavLink>
        </li>
        </>
      )
    }else{
      return (
        <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/"><span className='text-white'>Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About"><span className='text-white'>About</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact"><span className='text-white'>Contact</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login"><span className='text-white'>Login</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup"><span className='text-white'>Register</span></NavLink>
        </li>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid bg-success navc">
    <NavLink className="navbar-brand" to="#"><i><b className='text-white'>Expense management app</b></i></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-2 mb-2 mb-lg-0 ms-auto">
        <RenderMenu/>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
