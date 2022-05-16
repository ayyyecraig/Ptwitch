import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GetByCommentId, UpdateComment, DeleteComment } from '../services/CommentServices';

const CommentDetails = ( ) => {

    const [ formValues, setFormValues ] = useState({
        name: '',
        content: ''
    })

let navigate = useNavigate();
let { id } = useParams();

const [ comment, setComment] = useState({})

const handleComment = async () => {
    const data = await GetByCommentId(id)
    setComment(data)
    setFormValues({ name: comment.Streamer.name,
    content: comment.content})
}

const handleData = async () =>{
    handleComment()
}

 useEffect(() => {
     handleComment()
 }, [comment.content])

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value })
}



const deleteComment = async (comment) => {
    await DeleteComment(comment.id)
    navigate(`/streamers/${comment.streamerId}`)
}

const UpdateComments = async () => {
    await UpdateComment(comment.id, parseInt(formValues.content))
    navigate(`/streamers/${comment.streamerId}`)
}

return (
    <div>
      <p>{formValues.username}</p>
      <textarea
        className="update-review-content"
        type="text"
        name="content"
        value={formValues.content}
        placeholder={formValues.content}
        onChange={handleChange}
        ></textarea>
     
          <div >
            <button className="comment-update" onClick={() => UpdateComments()}>Update</button>
            <button className="comment-delete" onClick={() => deleteComment(comment)}>Delete</button>
          </div>
             
    </div>
)
}

export default CommentDetails