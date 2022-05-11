import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Streamers from "../services/StreamerServices";

const Streamer = () => {
    const [streamers, setStreamers] = useState([])

    let navigate = useNavigate();
    const viewStreamers = (streamer) => {navigate(`/streamers/${streamers.id}`)}

return (
<div className="streamers" >
    {
    streamers.map((streamer) => (

        <div key={streamer.id} onClick={() => viewStreamers(streamer)}>
            <h3>{streamer.name}</h3>
            <img className="streamer-pic" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'80%'}}/>
            <h4>{streamer.contentType}</h4>
            <h4>{streamer.schedule}</h4>
        </div>
        
    ))
    }
</div>
)

}

export default Streamer