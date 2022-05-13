import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    let authenticatedOptions
    if(props.user){
        authenticatedOptions = (
            <nav className='authenicated'>
                <Link to="/">Home</Link>
                <Link to="/user">My Streams</Link>
                <Link to='/streamers'>Streaming PlayLists</Link>

                <Link onClick={props.handleLogOut} to="/" className='logout'>
                    Log Out
                </Link> 
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">My Streams</Link>
            <Link to='/streamers'>Watchlists and Streamers</Link>
            <Link to="register" className='links'>Register</Link>

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