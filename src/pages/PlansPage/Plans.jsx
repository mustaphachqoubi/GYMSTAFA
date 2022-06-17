import React from 'react';
import './Plans.css'
import plans from '../../data/plans';
import { NavLink } from 'react-router-dom';

const Plans = () => {
  return (
    <div className='plans'>
        <div className="plan1 plan">
            <h1 className='planTitle'>
              {plans[0].title}
            </h1>
            <div className="priceContainer">
              <h1 className='price item'>
                ${plans[0].price}/month
              </h1>
              <NavLink to="/register">
                <button className='btn item'>Get it</button>
              </NavLink>
            </div>
        </div>

        <div className="plan2 plan">
            <h1 className='planTitle'>
              {plans[1].title}
            </h1>
            <div className="priceContainer">
              <h1 className='price item'>
                ${plans[1].price}/month
              </h1>
              <NavLink to="/register">
                <button className='btn item'>Get it</button>
              </NavLink>
            </div>
        </div>

        <div className="plan3 plan">
            <h1 className='planTitle'>
              {plans[2].title}
            </h1>
            <div className="priceContainer">
              <h1 className='price item'>
                ${plans[2].price}/month
              </h1>
              <NavLink to="/register">
                <button className='btn item'>Get it</button>
              </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Plans