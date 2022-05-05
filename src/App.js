import React from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/NavBar'
import Home from './pages/Home'
import User from './pages/User'
import './App.css';
import Register from './pages/Register' 
import Playlist from './pages/PlayList'
import LogIn from './pages/Login'

import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
  
export default function App() {
    const [authenticated, toggleAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
  
  
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  
  
    const handleLogOut = () => {
   
      setUser(null)
      toggleAuthenticated(false)
      localStorage.clear()
    }
  
    useEffect(() =>{
      const token = localStorage.getItem('token')
  
      if (token) {
        checkToken()
      }
    }, [])

  return (
    <div className="App">
       <Nav
        authenticated={authenticated}
        user={user} handleLogOut={handleLogOut}/>
       <main>
         <Routes>
          <Route path="/" element={<Home authenticated={authenticated} user={user}/>}  />
          <Route path="/user" element={<User user={user}          authenticated={authenticated}/>}/>
          <Route path="/playlist" element={<Playlist user={user}
                    authenticated={authenticated}/>}/> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
                    

         </Routes>
       </main> 
    </div>
  );
}


