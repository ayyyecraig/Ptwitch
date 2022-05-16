import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GetByCommentId, UpdateComment } from '../services/CommentServices';

const CommentDetails = ({ streamer } ) => {

    const [ formValues, setFormValues ] = useState({
  
        content: ''
    })

let navigate = useNavigate();
let { id } = useParams();

const [ comment, setComment] = useState({})

const handleComment = async () => {
    const data = await GetByCommentId(id)
    setComment(data)
    setFormValues({ content: comment.Streamer,
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



// const updateComments = async () => {
//    console.log(comment.Streamer.id)
//     await UpdateComment(comment.Streamer.id, formValues.content)
//     navigate(`/streamers/${comment.Streamer.id}`)
// }

const handleSubmit = async (e) => {
  
    await UpdateComment(comment.Streamer.id, formValues.content)
    setFormValues({...formValues, content: ''})
    navigate(`/streamers/${comment.Streamer.id}`)
}

return (
    <div>
      <p>{formValues.name}</p>
     

      <textarea
        className="update-content"
        type="text"
        name="content"
        value={formValues.content}
        placeholder={formValues.content}
        onChange={handleChange}
        ></textarea>
        {/* {          streamer.id === comment.Streamer.id ? */}
            <button className="comment-update" onClick={() => handleSubmit()}>Update</button>
        {/* //     : ''
             
        // } */}
       
             
    </div>
)
}

export default CommentDetails