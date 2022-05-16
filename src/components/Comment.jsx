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


const handleSubmit = async (e) => {
  console.log(formValues, "here")
    await UpdateComment(comment.Streamer.id, formValues.content)
    setFormValues({...formValues, content: ''})
    navigate(`/streamers/${comment.Streamer.id}`)
}

return (
    <div>
      <p>{formValues.name}</p>
     

      <input
        className="Box"
        type="text"
        name="content"
        value={formValues.content}
        onChange={handleChange}
        ></input>
        
            <button className="submut-button" onClick={() => handleSubmit()}>Update</button>
         
       
             
    </div>
)
}

export default CommentDetails