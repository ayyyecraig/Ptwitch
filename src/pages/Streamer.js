import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetStreamers} from "../services/StreamerServices"

const Streamer = () => {

    let navigate = useNavigate()
  
    const showStreamer = (streamer) => {
        
        navigate(`${streamer.id}`)
    }

    const [streamers, setStreamers] = useState([])

    useEffect(() =>{
        const handleStreamers = async () => {
            const data = await GetStreamers()
         
            setStreamers(data)
        }
        handleStreamers()
    }, [])

  

    



  
    return(
        <div className="streamers-Playlists ">
         { 
             streamers.map((streamer) => (
                 <div onClick={() => showStreamer(streamer)} className="block">
                     
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'40%'}} />
                       <h1>{streamer.name}</h1>
                       <h2>{streamer.contentType}</h2>
                 
                    </div>
             ))
         }

         
        </div>
            

     
    )

}
export default Streamer