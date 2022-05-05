import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = ({ authenticated, user }) => {
 
  let navigate = useNavigate()
  let authenticatedOptions
  if(user){ 
    authenticatedOptions = (
      
        <div className="home-container col">
          <button className="btn1" onClick={() => navigate('/user')}>
           Head to your Profile
          </button>
         
        </div>
      )
  }
  const publicOptions = (
        <div className="home-container">
            

      <section className="welcome-signin">
        <button className='start' onClick={() => navigate('/login')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )

  return (
    <div>
    {authenticated && user ? authenticatedOptions: publicOptions}
    </div>
  )

}
export default Home