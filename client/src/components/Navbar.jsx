import { Link } from "react-router-dom";
import React,{ useState } from 'react';
import "./Nav.css";
import logo from  "../assets/logo.png";

export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} width={60}></img></Link>
        <Link to="/" className='title' >BitProphecy</Link>
      </div>
      
      <div className='menu' onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open":""}>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/register' className="register">Register</Link>
        </li>
        <li>
          <Link to='/login' className="login">Login</Link>
        </li>
        <li>
          <Link to='/dashboard' className="dashboard">Dashboard</Link>
        </li>
      </ul>

    </nav>
  )
}