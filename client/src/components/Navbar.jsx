import { Link } from "react-router-dom";
import React,{ useState } from 'react';
import "./Nav.css";
import logo from  "../assets/favicon.ico";

export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img className="logo-img" src={logo} width={50}></img></Link>
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
          <Link to='/'>Home</Link>
        </li>
        {/* <li>
          <Link to='/homestore' className="register">Homestore</Link>
        </li> */}
        <li>
          <Link to='/login' className="login">Log Out</Link>
        </li>
        <li>
          {/* {req.cookie.token == "" ? null : } */}
          <Link to='/homestore' className="dashboard">Dashboard</Link>
        </li>
      </ul>

    </nav>
  )
}