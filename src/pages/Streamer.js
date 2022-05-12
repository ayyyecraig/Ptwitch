import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetStreamers, AddStreamer } from "../services/StreamerServices"

const Streamer = () => {

    let navigate = useNavigate()

    const showStreamer = (streamer) => {
        console.log(streamer, "bam")
        navigate(`/${streamer.id}`)
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

     const addToPlaylists = () => {
         AddStreamer(streamers.id)
         navigate('/user')
         console.log(streamers)

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
               
                    <button onClick={() => {addToPlaylists()}} className='addto'>Add to PlayList</button> 
                    </div>
             ))
         }

         
        </div>
            

     
    )

}
export default Streamer