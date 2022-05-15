import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetStreamers, RemoveStream } from '../services/StreamerServices'

const User = ({user}) => {

    let navigate = useNavigate()

    const showStreamer = (streamer) => {
        navigate(`/${streamer.id}`)
    }

    const [streamers, setStreamers] = useState([])

    const handleStreamers = async () => {
        const data = await GetStreamers()
        let selectedStreamer = []
        data.forEach((streamer) => {
          
            if(streamer.userId === user.id && streamer.status === false){
              selectedStreamer.push(streamer)
            }
        })
    
        setStreamers(selectedStreamer)
    }
    useEffect(() => {
        handleStreamers()
    }, [streamers.id])

   
    const removeStreamer = (streamerId) => {
        RemoveStream(streamerId)
        console.log(removeStreamer)
        navigate('/user')

     

    }



    return(
        <div>
            <h3>Your Streams</h3>

            { 
                streamers.map((streamer) => (
                   <div className='streamer-details'>
                  
                   <img onClick={() => showStreamer(streamer)}className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                   <div onClick={ () => showStreamer(streamer)}>

                     <h1>{streamer.name}</h1>
                     <h2>{streamer.contentType}</h2>
                    </div>
                 <button onClick={() => removeStreamer(streamer.id)}>remove from watchlist</button>
                </div>
            ))}
        </div>
        
    )

}

export default User