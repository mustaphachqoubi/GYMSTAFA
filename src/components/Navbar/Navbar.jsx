import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLogoList'>
      <NavLink 
        className="navbarListItem logo"
        to="/">
        <h1 className='navbarLogo'>GYM<span className='tafa'>STAFA</span></h1>
        </NavLink>
      </div>

      <div className='btnAndListContainer'>
        <div className='navbarList'>
          <NavLink 
          className="navbarListItem"
          to="/" 
          style={({isActive}) =>
          isActive ? 
          ({borderTop: '3px solid var(--primary-color)'}) : 
          ({border: 'none'})
          }>
            Home
          </NavLink>

          {/* <NavLink 
          className="navbarListItem"
          to="/plans" 
          style={({isActive}) =>
          isActive ? 
          ({borderTop: '3px solid var(--primary-color)'}) : 
          ({border: 'none'})
          }>
            Plans
          </NavLink> */}

          <NavLink 
          className="navbarListItem"
          to="/exercises" 
          style={({isActive}) =>
          isActive ? 
          ({borderTop: '3px solid var(--primary-color)'}) : 
          ({border: 'none'})
          }>
            Exercises
          </NavLink>

          {/* <NavLink 
          className="navbarListItem"
          to="/aboutme" 
          style={({isActive}) =>
          isActive ? 
          ({borderTop: '3px solid var(--primary-color)'}) : 
          ({border: 'none'})
          }>
            About me
          </NavLink> */}
        </div>

        <div className='humberger'>
          <NavLink 
            className="navbarListItem"
            to="/leftbar">
              <HiMenu />
            </NavLink>
        </div>

        <div className='navbarBtnList'>
          {/* <NavLink 
            className="navbarListItem"
            to="/register">
              <button className='navbarBtn'>Join</button>
            </NavLink> */}
        </div>

      </div>
    </div>
  )
}

export default Navbar