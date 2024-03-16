import { Link } from "react-router-dom";
import React,{ useState } from 'react';
import "./Nav.css";

export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav>
      <Link to="/" className='title' >BitProphecy</Link>
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