import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GetById, UpdateComment, DeleteComment } from '../services/CommentServices';

const CommentDetails = ( { user } ) => {

    const [ formValues, setFormValues ] = useState({
        username: '',
        content: ''
    })

let navigate = useNavigate();
let { id } = useParams();

const [ comment, setComment] = useState({})

const handleComment = async () => {
    const data = await GetById(id)
    setComment(data)
    setFormValues({ username: comment.User.username,
    content: comment.content})
}

 useEffect(() => {
     handleComment()
 })

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value })
}



const deleteComment = async (comment) => {
    await DeleteComment(comment.id)
    navigate(`/streamers/${comment.streamerId}`)
}

const update = async () => {
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
        {
         user.id === comment.userId ?
          <div >
            <button className="comment-update" onClick={() => update()}>Update</button>
            <button className="comment-delete" onClick={() => deleteComment(comment)}>Delete</button>
          </div>
                : ''
            }
    </div>
)
}

export default CommentDetails