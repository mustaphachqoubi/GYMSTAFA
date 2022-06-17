import React, {useState} from 'react';
import './Diets.css';
import gainDiets from '../../data/gainDiets';
import looseDiets from '../../data/looseDiets';
import ReactPlayer from 'react-player';

const Diets = () => {
  const [gain, setGain] = useState([]);
  const [loose, setLoose] = useState([]);
  return (
    <div className='diets'>
      
      <div className='chooseDiet'>
          <button 
          className='gainBtn dietButton'
          onClick={() => {
            setGain(gainDiets)
            document.querySelector('.looseContainer').style = 'display: none'
            document.querySelector('.gainContainer').style = 'display: flex'
            document.querySelector('.gainBtn').style = 
            `background: var(--primary-color);
             color: var(--secondary-color)`
             document.querySelector('.looseBtn').style = 
             `background: var(--secondary-color);
              color: var(--primary-color)`
          }}
          >
            i want to gain weight
          </button>

          <button 
          className='looseBtn dietButton'
          onClick={() => {
            setLoose(looseDiets)
            document.querySelector('.gainContainer').style = 'display: none'
            document.querySelector('.looseContainer').style = 'display: flex'
            document.querySelector('.looseBtn').style = 
            `background: var(--primary-color);
             color: var(--secondary-color)`
             document.querySelector('.gainBtn').style = 
            `background: var(--secondary-color);
             color: var(--primary-color)`
             
          }}
          >i want to loose weight</button>
      </div>

        <div className="gainContainer dietItem">
          {gain.map(v => {return <ReactPlayer className="diet" width="600px" url={v.males} />})}
        </div>

        <div className="looseContainer dietItem">
          {loose.map(v => {return <ReactPlayer className="diet" width="600px" url={v.males} />})}
        </div>

    </div>
  )
}

export default Diets