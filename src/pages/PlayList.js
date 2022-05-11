import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetAllPlaylists } from "../services/PlaylistServices" 
import Streamer  from '../components/Streamers'
import { GetStreamers } from "../services/StreamerServices"

const PlayList = () => {
 
    let navigate = useNavigate()

    const showList = () => {
        navigate(`playlists/${playlists.id}`)
    }

    const [playlists, setPlaylists] = useState([])

    useEffect(() =>{
        const handlePlaylists = async () => {
            const data = await GetAllPlaylists()
           console.log(data)
            setPlaylists(data)
        }
        handlePlaylists()
    }, [])


    return(
        <div >
            <h3>Who's Watching Who</h3>
            <div className="playlists">
                { playlists.map((playlists) => (
                    <div onClick={() => showList(playlists)}>
                     
                     
                    
                    </div>
                ))}

                <div className="streamer-container">
                    <Streamer />
                </div>
            </div>
        </div>
    )

}

export default PlayList