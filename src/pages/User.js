import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  GetStreamers, RemoveStream } from '../services/StreamerServices'

const User = ({user}) => {

    let navigate = useNavigate()

    const showStreamer = (streamer) => {
        navigate(`/user`)
    }

    const [streamers, setStreamers] = useState([])

    const handleStreamers = async () => {
        const data = await GetStreamers()
        let selectedStreamer = []
        data.forEach((streamer) => {
            selectedStreamer.push(streamer)
            
        })
        setStreamers(selectedStreamer)
    }

    useEffect(() => {
        handleStreamers()
    }, [streamers.id])

    const removeStreamer = (streamerId) => {
        RemoveStream(streamerId)
        window.location.reload(`/user`)

    }

  


    return(
        <div>
            <h3>Your Streams</h3>
            { streamers.map((streamer) => (
                   <div onClick={() => showStreamer(streamer)}>
                   <div className="streamer-details">
                   <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                     <h1>{streamer.name}</h1>
                 </div>
                 <button onClick={() => removeStreamer(streamer.id)}>remove from watchlist</button>
                </div>
            ))}
        </div>
        
    )

}

export default User

