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
                     <img className="streamer-pics" src={streamer.img} alt="streamer" style={{display: 'block', maxWidth:'30%'}} />
                       <h1>{streamer.name}</h1>
                       
                       {streamer.status ? 
                        <button onClick={() => {AddToUser()}} className='addto'>Add to PlayList</button> :   <button onClick={() => {AddToUser()}} className='addto'>Add to PlayList</button> 
                       }

                       <div className='emotes2'>
                        <img src="https://i.imgur.com/Rn95v0T.png" title="source: imgur.com" className='emotes2a'/>
                            <img src="https://i.imgur.com/NlCH9UM.png" title="source: imgur.com" className='emotes2a'/>
                            <img src="https://i.imgur.com/q3UJ4Pb.png" title="source: imgur.com" className='emotes2a'/>
                            <img src="https://i.imgur.com/K3UZtYo.png" title="source: imgur.com" className='emotes2a' />
                        <img src="https://i.imgur.com/lQrQ317.png" title="source: imgur.com" className='emotes2a'/>
                            <img src="https://i.imgur.com/8gqp48M.png" title="source: imgur.com" className='emotes2a'/>
                        <img src="https://i.imgur.com/aRChSKb.png" title="source: imgur.com" className='emotes2a' />
                            <img src="https://i.imgur.com/3KSpcOI.gif" title="source: imgur.com" className='emotes2a' />
                       </div>
                     </div>
                    
                    {authenticated && user ? 
                    
                    <WriteComment streamer={streamer} />: <WriteComment streamer={streamer} />
                    }
                    
                        
                    <Comments streamer={streamer} />
         
        </div>
            

     
    )

}
export default StreamerDets