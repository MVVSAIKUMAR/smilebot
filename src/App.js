import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation from './component/Navigation'
import Home from './Home'
import Context from './Pages/Context'
import Fav from './Pages/Fav'
import Homes from './Pages/Homes'
import Order from './Pages/Order'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Homes /> } />
        <Route path='/Home' element = {<Homes /> } />
        <Route path='/context' element = {<Context /> } />
        <Route path='/fav' element = {<Fav /> } />
        <Route path='/order' element = {<Order /> } />
        <Route path='/profile' element = {<Profile /> } />
      {/* { <Home /> } */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App