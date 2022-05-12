import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewComment } from '../services/CommentServices';

const WriteComment = (props) => {
    const [ form, setForm ] = useState({
        content: ''
    }) 

    let navigate = useNavigate()

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await NewComment(form.content, props.user.id, props.streamer.id)
        navigate(`/streamers`)
        setForm({...form, content: ''})
    }
    return (
        <div className='write-comment'>
              <textarea
                className="Box"
                type="text"
                name="content"
                value={form.content}
                onChange={handleChange}
            ></textarea>
             <button className="submit-button" type="submit" onClick={handleSubmit} disabled={!form.rating}>Comment</button>
        </div>
    )
}

export default WriteComment

