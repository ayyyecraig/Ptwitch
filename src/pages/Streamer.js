import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetStreamers} from "../services/StreamerServices"

const Streamer = () => {

    let navigate = useNavigate()

    const [streamers, setStreamers] = useState([])

    useEffect(() =>{
        const handleStreamers = async () => {
            const data = await GetStreamers()
         
            setStreamers(data)
        }
        handleStreamers()
    }, [])

    
    const showStreamer = (streamer) => {
        
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
               
                    <button>Details</button> 
                    </div>
             ))
         }

         
        </div>
            

     
    )

}
export default Streamer