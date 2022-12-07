import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import Navigation from './Navigation';
import Homepage from './home/Homepage';
import Dashboard from './dashboard/Dashboard';
import Footer from './Footer'
import Transactions from './transactions/Transactions'
import Account from './account/Account';
import Budget from "./budget/Budget"
import SignIn from './signup/SignIn';
// Custom Hooks
import useAuthenicate from './hooks/useAuthenicate';

import './styles/app.scss'
import './styles/index.css'

import avatar from './assets/avatar.png';
function App() {
  // console.log(useAuthenicate())
  const client = new QueryClient()

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
        <QueryClientProvider client={client}>
          <Navigation />
            <Routes>
              <Route path='/login' element={<SignIn />} exact/>
              <Route path='/' element={<Homepage />} exact/>
              <Route path='/dashboard' element={<Dashboard />} exact/>
              <Route path='/transactions' element={<Transactions />} exact/>
              <Route path='/account' element={<Account user={user}/>} exact/>
              <Route path='/budget' element={<Budget />} exact/>
            </Routes>
          <ReactQueryDevtools />
        </QueryClientProvider>
        <Footer />
      </>
  )
}

export default App
