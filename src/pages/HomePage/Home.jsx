import React from 'react';
import './Home.css';
import HeroImg from '../../assets/nowBody.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className="heroBnner">
        <div className="heroContentContainer">
          <h1 className="heroBigTitle">
            GET A <span className='shradded'>SHREDDED</span> <br /> BODY FOR FREE
          </h1>

          <h5 className="heroSmallTitle">
            Check out the most effective exercises personalized to you.
          </h5>

          <Link to="/exercises">
            <button className='heroBtn'>Exercises and Diet</button>
          </Link>

          <h1 className="heroExpression">
            Exercises
          </h1>
        </div>

        <div className="heroImgContainer">
          <img src={HeroImg} alt="" className="heroImg" />
        </div>
      </div>
    </div>
  )
}

export default Home