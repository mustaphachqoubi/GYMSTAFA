import React, {useState} from 'react';
import exercises from '../../data/exercises';
import ReactPlayer from 'react-player';
import './Exercises.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Exercises = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;
  const indexofLastExercises = currentPage * exercisesPerPage;
  const indexofFirstExercises = indexofLastExercises - exercisesPerPage;
  const currentExercises = exercises.slice(indexofFirstExercises, indexofLastExercises)
  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  return (
    <>
      <div className='exercises'>
        {
          currentExercises.map(v => {
           return <ReactPlayer width="245px" className="exercice"
           url={v.video} />
           
          })
        }
      </div>
      <div className='changer'>
        <Stack spacing={2}>
          {
            exercises.length > 9 && (
              <Pagination 
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              />
            )
          }
        </Stack>
      </div>
      <div className="toDiet">
        <Link to='/diets'>
          <button className='dietBtn'>Diet</button>
        </Link>
      </div>
    </>
  )
}

export default Exercises