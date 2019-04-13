import React from 'react';
import { Redirect } from 'react-router-dom'

const Secret = ({isLoggedIn}) =>{
    if (isLoggedIn) {
        return(
            <div className='jumbotron text-center'>
                <h3>this page is so secret</h3>
            </div>
        )
    };
    return(
        <Redirect to='/login'/>
    )
};

export default Secret;