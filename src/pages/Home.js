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
            <img src="https://i.imgur.com/7kLutmx.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/QlXql5o.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Qj8QiRJ.png" title="source: imgur.com"className='emotes' />
           <img src="https://i.imgur.com/pmVlGkN.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ipJSlz1.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/L72wHzK.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/wO2Ov32.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/tanOcV0.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/NcCewOu.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            
            <img src="https://i.imgur.com/7kLutmx.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/QlXql5o.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Qj8QiRJ.png" title="source: imgur.com"className='emotes' />
           <img src="https://i.imgur.com/pmVlGkN.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ipJSlz1.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/L72wHzK.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/wO2Ov32.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/tanOcV0.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/NcCewOu.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            <img src="https://i.imgur.com/7kLutmx.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/QlXql5o.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Qj8QiRJ.png" title="source: imgur.com"className='emotes' />
           <img src="https://i.imgur.com/pmVlGkN.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ipJSlz1.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/L72wHzK.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/wO2Ov32.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/tanOcV0.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/NcCewOu.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            <img src="https://i.imgur.com/7kLutmx.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/QlXql5o.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Qj8QiRJ.png" title="source: imgur.com"className='emotes' />
           <img src="https://i.imgur.com/pmVlGkN.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ipJSlz1.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/L72wHzK.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/wO2Ov32.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/tanOcV0.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/NcCewOu.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3GvdaCa.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/uBDTiGW.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/DrRvG78.jpg" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/ZKnIwUI.png" title="source: imgur.com" className='emotes'  />
            <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes' />
           <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes'/>
            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes'/>
           <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes' />
            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes' />



      <section className="welcome-signin">
       
      </section>
    </div>
  )

  return (
    <div className='home-button'>
       <button className='start' onClick={() => navigate('/login')}>
          Click Here To Get Started
        </button>
    {authenticated && user ? authenticatedOptions: publicOptions}
    </div>
  )

}
export default Home