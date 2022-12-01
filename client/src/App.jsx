import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './Navigation';
import Homepage from './home/Homepage';
import Dashboard from './dashboard/Dashboard';
import Footer from './Footer'
import Transactions from './transactions/Transactions'
import Account from './account/Account';
import Budget from "./budget/Budget"

import './styles/app.scss'
import './styles/index.css'

import avatar from './assets/avatar.png';
function App() {
  const user = {
    email: 'test@test.com',
    fullName: "Nick Mendez",
    username: 'Admin007',
    password: "test123",
    avatar: avatar,
    linkedAccounts: [
      { 
        institution: "Bank of America",
        accessToken: "access-token-BoA"
      },
      { 
        institution: "Chase",
        accessToken: "access-token-chase"
      },
      { 
        institution: "American Express",
        accessToken: "access-token-AEX"
      },
    ]
  }
  return (
      <>
        <Navigation />
          <Routes>
            <Route path='/' element={<Homepage />} exact/>
            <Route path='/dashboard' element={<Dashboard />} exact/>
            <Route path='/transactions' element={<Transactions />} exact/>
            <Route path='/account' element={<Account user={user}/>} exact/>
            <Route path='/budget' element={<Budget />} exact/>
          </Routes>
        <Footer />
      </>
  )
}

export default App
