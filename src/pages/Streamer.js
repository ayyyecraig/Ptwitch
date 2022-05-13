import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetStreamers, AddStreamer} from "../services/StreamerServices"

const Streamer = ({user}) => {

    let navigate = useNavigate()

    const [streamers, setStreamers] = useState([])

    useEffect(() =>{
        const handleStreamers = async () => {
            const data = await GetStreamers()
            console.log(data, "sick")
            setStreamers(data)
        }
        handleStreamers()
    }, [])

     const AddToUser = () => {
         AddStreamer(streamers.id, user.id)
         navigate('/user')
 

     }
    
    const showStreamer = (streamer) => {
        console.log(streamer)
        navigate(`${streamer.id}`)
    }


    



  
    return(
        <div className="streamers-Playlists ">
         { 
             streamers.map((streamer) => (
                 <div onClick={() => showStreamer(streamer)}>
                     <div className="streamer-details">
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                       <h1>{streamer.name}</h1>
                       
                     </div>
               
                    <button onClick={() => {AddToUser()}} className='addto'>Add Streamer</button> 
                    </div>
             ))
         }

         
        </div>
            

     
    )

}
export default Streamer