import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Comments from '../components/Comments'
import WriteComment from '../components/WriteComment'
import { GetStreamerDetails, AddStreamer} from "../services/StreamerServices"


const StreamerDets = ({user, authenticated}) => {

    let { id } = useParams()
    let navigate = useNavigate()

    const [streamer, setStreamer] = useState({})

    useEffect(() =>{
        const handleStreamers = async () => {
            
            const data = await GetStreamerDetails(id)
            setStreamer(data)
        }
        handleStreamers()
    }, [])

   
    const AddToUser = () => {
        if(streamer.status === true ) {
            AddStreamer(streamer.id, user.id)
        navigate('/user')
        } else{
            alert('poggers')
        }
        
    }

    return(
        <div className="streamer ">
         
                     <div className="streamer-details">
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'20%'}} />
                       <h1>{streamer.name}</h1>
                       
                       {streamer.status ? 
                        <button onClick={() => {AddToUser()}} className='addto'>Add to PlayList</button> :   <button onClick={() => {AddToUser()}} className='addto'>Add to PlayList</button> 
                       }
                     </div>
                    
                    {authenticated && user ? 
                    
                    <WriteComment streamer={streamer} user={user}/>: <WriteComment streamer={streamer} user={user}/>
                    }
                    
                        
                    <Comments streamer={streamer} user={user}/>
         
        </div>
            

     
    )

}
export default StreamerDets