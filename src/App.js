import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareLayout from './components/ShareLayout';
import Home from './pages/HomePage/Home';
import Error from './pages/ErrorPage/Error'
// import Plans from './pages/PlansPage/Plans';
import Exercises from './pages/ExercisesPage/Exercises';
// import AboutMe from './pages/AboutMePage/AboutMe';
import Register from './pages/RegisterPage/Register';
import LeftBar from './components/LeftBar/LeftBar';
import Diets from './components/Diets/Diets'

const App = () => {
  const Fetched = async () => {
    const res = await fetch('https://api.stripe.com')
    const data = await res.json()
    console.log(data.error)
  }
  useEffect(() => {
    Fetched()
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Home />}/>
            {/* <Route path='plans' element={<Plans />}/> */}
            <Route path='exercises' element={<Exercises />}/>
            {/* <Route path='aboutme' element={<AboutMe />}/> */}
            <Route path='register' element={<Register />}/>
            <Route path='leftbar' element={<LeftBar />}/>
            <Route path='diets' element={<Diets />}/>
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App