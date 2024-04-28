  import React from 'react'
  import { Routes, Route } from 'react-router-dom'
  import Home from './pages/Home/Home'
  import IntroDemo from './pages/IntroductionDemo/IntroDemo'
  import Login from './pages/Login/Login'
  import Register from './pages/Register/Register'
  import Chart from './pages/tradingbiew/Chart'
  import Profile from './pages/Profile/Profile'
  import Reyting from './pages/Reyting/Reyting'
  import CryptoDataFetcher from './pages/CryptoDataFetcher/CryptoDataFetcher'
  import CryptoChart from './pages/CryptoChart/CryptoChart'
  import Product from './pages/Product/Product'
  import Error from './pages/Error/Error'
  import Baned from './pages/Baned/Baned'
  import User from './pages/User/User'
  import Transaction from './pages/Transaction/Transaction'
import Update from './pages/Update/Update'

  const App = () => {
    
    return (
      <>
        {localStorage.getItem('Access') ? (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/introductiondemo' element={<IntroDemo />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reyting' element={<Reyting />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/ban' element={<Baned />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='*' element={<Error />} />
          <Route path='/' element={<CryptoDataFetcher />} />
          <Route path='/coinchart' element={<CryptoChart />} />
          <Route path="/coin/:symbol" element={<Product />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/introductiondemo' element={<IntroDemo />} />
          </Routes>     
        )}
      </>
    )
  }

  export default App