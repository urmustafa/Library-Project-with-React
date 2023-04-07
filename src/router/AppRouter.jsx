import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { GlobalStyles } from '../styles/Global.styles'
import Footer from '../components/footer/Footer'
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import PrivateRouter from './PrivateRouter'
import Detail from '../pages/detail/Detail'
import About from '../pages/about/About'



const AppRouter = () => {

  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("user") || false)


  return (
    <BrowserRouter>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}></Navbar>
    <GlobalStyles></GlobalStyles>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser}></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      {/* <Route path='/about' element={<PrivateRouter></PrivateRouter>}>
        <Route path='' element={<About></About>}></Route>
      </Route>
      <Route path='/detail' element={<PrivateRouter></PrivateRouter>}>
        <Route path='' element={<Detail></Detail>}></Route>
      </Route> */}

      <Route element={<PrivateRouter></PrivateRouter>}>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      </Route>



    </Routes>
    <Footer></Footer>
    
    </BrowserRouter>
  )
}

export default AppRouter