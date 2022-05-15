import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const LogIn = (props) => {

    let navigate = useNavigate()
  
    const [formValues, setFormValues] = useState({ email: '', password: '' })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await SignInUser(formValues)
      console.log(payload)
      setFormValues({ email: '', password: '' })
      props.setUser(payload)
      props.toggleAuthenticated(true)
      navigate('/user')
    }
   
    return (
        <div>
            <form className='form'>
                <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className='email'
                    />
                <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password} 
                        onChange={handleChange}
                        required
                        className='password'
                    />
           
            <button onClick={handleSubmit} disabled={!formValues.email || !formValues.password} className='login'>Log In</button> </form>
        </div>
    )

}

export default LogIn