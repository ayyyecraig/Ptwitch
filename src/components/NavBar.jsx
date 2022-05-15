import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    let authenticatedOptions
    if(props.user){
        authenticatedOptions = (
            <nav className='authenicated'>
                <Link to="/" className='links norm'>Home</Link>
                <Link to='/streamers' className='links norm '>Streaming PlayLists</Link>
                <div>
                    <Link onClick={props.handleLogOut} to="/" className='logout logs'>
                        Log Out
                    </Link> 
                    <Link to="/user" className='links logs'>My Streams</Link>
                </div>
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/" className='links norm'>Home</Link>
            
            <Link to='/streamers' className='links norm'>Watchlists and Streamers</Link>
            <div>
                <Link to="register" className='links logs'>Register</Link>
                <Link to="/login" className='links logs'>My Streams</Link>
            </div>
        </nav>
    )

    return (
       <nav> 
        <div>
        {  props.authenticated ? authenticatedOptions : publicOptions}
        </div>
       </nav>
    )
}

export default Nav