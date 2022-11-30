import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './Navigation';
import Homepage from './home/Homepage';
import Dashboard from './dashboard/Dashboard';
import Footer from './Footer'
import Transactions from './transactions/Transactions'
import Account from './account/Account';

import './styles/app.scss'
import './styles/index.css'

function App() {

  return (
      <>
        <Navigation />
          <Routes>
            <Route path='/' element={<Homepage />} exact/>
            <Route path='/dashboard' element={<Dashboard />} exact/>
            <Route path='/transactions' element={<Transactions />} exact/>
            <Route path='/account' element={<Account />} exact/>
          </Routes>
        <Footer />
      </>
  )
}

export default App
