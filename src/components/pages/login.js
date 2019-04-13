import React from 'react';
import {Redirect} from 'react-router-dom'

const Login = ({isLoggedIn, onLogin}) =>{

    if (isLoggedIn) {
        return(
            <Redirect to='/secret'/>
        )
    }

    return(
        <div className='jumbotron text-center'>
            <p>log in to see shadow page</p>
            <button className='btn btn-secondary' onClick={onLogin}>log in</button>
        </div>
    )
};

export default Login