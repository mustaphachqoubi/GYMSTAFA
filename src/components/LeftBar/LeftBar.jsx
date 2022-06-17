import React from 'react';
import './LeftBar.css';
import {NavLink} from 'react-router-dom';


const LeftBar = () => {
  return (
    <div className='leftBar'>
        <NavLink to="/" className="leftbarItem">
          Home
        </NavLink>
        {/* <NavLink to="/plans" className="leftbarItem">
          Plans
        </NavLink> */}
        <NavLink to="/exercises" className="leftbarItem">
          Exercises
        </NavLink>
        {/* <NavLink to="/aboutme" className="leftbarItem">
          About me
        </NavLink> */}
        {/* <NavLink to="/register" className="leftbarItem">
          <button className='leftbarBtn'>Join</button>
        </NavLink> */}
    </div>
  )
}

export default LeftBar