import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


Route
function App() {

  const [authUser,setAuthUser] = useAuth()

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white select-none'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books' element={authUser ? <Courses />:< Navigate to={'/signup'}/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
