import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ authenicated, user, handleLogOut }) => {
    let authenicatedOptions
    if(user){
        authenicatedOptions = (
            <nav className='authenicated'>
                <Link to="/">Home</Link>
                <Link to="/user">My Streams</Link>
                <Link to='/playlist'>Streaming PlayLists</Link>

                <Link onClick={handleLogOut} to="/" className='logout'>
                    Log Out
                </Link> 
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">My Streams</Link>
            <Link to='/playlist'>Streaming PlayLists</Link>
            <Link to="register" className='links'>Register</Link>

        </nav>
    )
    return (
       <nav> 
        <div>
        {  authenicated && user ? authenicatedOptions : publicOptions}
        </div>
       </nav>
    )
}

export default Nav