import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewComment } from '../services/CommentServices';


const WriteComment = ( props ) => {
    const [ formValues, setForm ] = useState({
        content: ''
    });

    let navigate = useNavigate()


    const handleChange = (e) => {
        setForm({...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await NewComment(formValues.content, props.streamer.id)
        window.location.reload(`/streamers/:id`)
        setForm({...formValues, content: ''})
    }

    return (
        <div className='write-comment'>
              <input
                className="Box"
                type="text"
                name="content"
                value={formValues.content}
                onChange={handleChange}
            ></input>
             <button className="submit-button" type="submit" onClick={handleSubmit} >Comment</button>
        </div>
    )
}

export default WriteComment

