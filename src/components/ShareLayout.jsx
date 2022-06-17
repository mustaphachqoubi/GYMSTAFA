import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default ShareLayout