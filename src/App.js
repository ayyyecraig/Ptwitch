import React from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/NavBar'
import Home from './pages/Home'
import User from './pages/User'
import './App.css';
import Register from './pages/Register' 
import Streamer from './pages/Streamer'
import LogIn from './components/Login'
import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
import StreamerDets from './pages/StreamerDetails'
import Comment from './pages/Comment'
import Comments from './components/Comments'



export default function App() {
    const [authenticated, toggleAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
  
  
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
  
      if (token) { //change back to token 
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
           {/* home */}
          <Route path="/" element={<Home authenticated={authenticated} user={user}/>}  />


          <Route path="/user" element={<User user={user}    setUserId={setUserId}      authenticated={authenticated}/>}/>
          {/* all streamers page */}

          <Route path="/streamers" element={<Streamer user={user}
                    authenticated={authenticated}/>}/>   

            {/* indivual streamer  */}
          <Route path="streamers/:id"   element={<StreamerDets authenticated={authenticated} user={user}/> } />

            shows all comments
          <Route path='/comments' element={<Comments user={user} authenticated={authenticated}/>} />

          {/* comment controller */}
          <Route path='/comments/:id' element={<Comments />} />

          <Route path="/comments/:id" element={<Comment  />} />


            {/* auth routes */}
          <Route path="/login" element={<LogIn setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path="/register" element={<Register />} />

   
                    

         </Routes>
       </main> 
    </div>
  );
}


