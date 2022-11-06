import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './Navigation';
import Homepage from './home/Homepage';
import Dashboard from './dashboard/Dashboard';

import './styles/app.scss'
import './styles/index.css'

function App() {

  return (
      <>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} exact/>
          <Route path='/dashboard' element={<Dashboard />} exact/>
        </Routes>
      </>
  )
}

export default App
