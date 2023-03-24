import { React, useRef } from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"

export default function NavBar({ theme, toggleTheme }) {
  // script for the responsive nav
  const navRef = useRef()
  const responsiveNavBar = () => {
    if (navRef.current.className === "box topnav") {
      navRef.current.className += " responsive"
      // console.log("found")
    } else {
      // console.log("didnt find it")
      navRef.current.className = "box topnav"
    }
  }

  const logOut =()=>{
    window.localStorage.clear("token")
    window.location.href="/"
  }

  return (
    <>
      <nav className="box topnav" ref={navRef}>
        <div id="myTopNav">
          <NavLink to="/main">Home</NavLink>
          <NavLink to="/sales">Sales</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/balance">Balance</NavLink>
          <NavLink to="/stock">Stock</NavLink>
          
            <i className="fa-solid fa-right-from-bracket" title="Logout" id="logout" onClick={logOut}></i>
    
          <a className="icon" onClick={responsiveNavBar}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div
          id="toggle"
          className={theme === "light" ? "active" : ""}
          onClick={toggleTheme}
        >
          <i className="indicator"></i>
        </div>
      </nav>
    </>
  )
}
