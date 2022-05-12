import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GetComments } from '../services/CommentServices';

const Comments = ({ user }) => {

    const [comments, setComments] = useState([])

    let { id } = useParams();
    let navigate = useNavigate();

    const viewComment = (comment) => {
        navigate(`/comments/${comment.id}`)
    }


useEffect(() => { 
    const handleComments = async () => {
        const data = await GetComments(id)
        let selectedComments = []
        data.forEach((comment) => {
            if(comment.streamerId === parseInt(id)){
                selectedComments.push(comment)
            }
        })
        setComments(selectedComments)
        console.log(data)
    } 
    handleComments()
}, [comments.id])


return (
    <div className='comments'>
        {
            comments.map((comment) => (
                <div className='comment' key={comment.id} onClick={() =>
                 viewComment(comment)}>
                     <p className='comment-dets'>{comment.User.username}</p>
                     <p className='comment-dets'>{comment.content}</p>
                 </div>
            ))
        }
    </div>
)

}

export default Comments