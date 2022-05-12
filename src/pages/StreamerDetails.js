import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Comments from '../components/Comments'
import WriteComment from '../components/WriteComment'
import { GetStreamerDetails, AddStreamer} from "../services/StreamerServices"

const StreamerDets = ( user ) => {

    let { id } = useParams()
    let navigate = useNavigate()

    const [streamer, setStreamer] = useState([])

    useEffect(() =>{
        const handleStreamers = async () => {
            const data = await GetStreamerDetails(id)
            console.log(data)
            setStreamer(data)
        }
        handleStreamers()
    }, [])

     const addToPlaylists = () => {
         AddStreamer(streamer.id)
         navigate('/user')
         console.log(streamer)

     }

    return(
        <div className="streamer ">
         
                     <div className="streamer-details">
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                       <h1>{streamer.name}</h1>
                       <button onClick={() => {addToPlaylists()}} className='addto'>Add to PlayList</button>
                     </div>
               
                    <Comments streamer={streamer} user={user}/>
                    <WriteComment streamer={streamer} user={user}/>


         
        </div>
            

     
    )

}
export default StreamerDets