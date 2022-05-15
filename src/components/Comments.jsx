import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { GetComments } from '../services/CommentServices';

const Comments = ({ streamer }) => {

    
    const [comments, setComments] = useState([])


    let navigate = useNavigate();

    const viewComment = (comment) => {
        navigate(`/comments/${comment.id}`)
    }


useEffect(() => { 
    const handleComments = async () => {
        const data = await GetComments()   
        

        setComments(data)

    } 
    handleComments()
},[])


return (
    <div className='comments'>
        {
            comments.map((comment) => (
                <div className='comment' key={comment.id} onClick={() =>
                 viewComment(comment)}>
                     <p className='comment-dets'>{comment.user.username}</p>
                     <p className='comment-dets'>{comment.content} </p>
                     
                 </div>
            ))
        }
    </div>
)

}

export default Comments