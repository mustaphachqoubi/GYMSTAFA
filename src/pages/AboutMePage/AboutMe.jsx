import React from 'react';
import './Aboutme.css';
import ReactPlayer from 'react-player';
import {IoLogoYoutube} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai'

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='video'>
        <ReactPlayer 
          width="400px"
          className="aboutme_video"
          url="https://www.youtube.com/watch?v=81znEpRT0_s"/>
      </div>

        <div className='aboutme_socialMedia'>
            <IoLogoYoutube className='item'/>
            <AiFillInstagram className='item'/>
        </div>
    </div>
  )
}

export default AboutMe