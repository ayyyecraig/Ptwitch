import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetAllPlaylists } from "../services/PlaylistServices" 
import { GetStreamers } from "../services/StreamerServices"


const PlayList = () => {

    let navigate = useNavigate()

    const showStreamer = (streamer) => {
        navigate(`streamers/${streamer.id}`)
    }

    const [streamers, setStreamers] = useState([])

    useEffect(() =>{
        const handleStreamers = async () => {
            const data = await GetStreamers()
            console.log(data)
            setStreamers(data)
        }
        handleStreamers()
    }, [])

    

    



  
    return(
        <div className="streamers-Playlists ">
         { 
             streamers.map((streamer) => (
                 <div onClick={() => showStreamer(streamer)}>
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                     
                     <div className="details">
                       <h1>{streamer.name}</h1>
                     </div>
                 </div>

             ))
         }

         
        </div>
            

     
    )

}
export default PlayList