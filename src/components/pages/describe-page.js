import React from 'react';
import {Link} from 'react-router-dom'


const Describe = () =>{
    return(
        <div className='jumbotron'>
            <h2>Welocme to my SPA</h2>
            <h3>Its a React Practise using:</h3>
            <ul>
                <li>Real API - <Link to='https://swapi.co/api'>https://swapi.co/api</Link></li>
                <li>Context Api</li>
                <li>React Router</li>
                <li>Most usable Lifecycle hooks </li>
                <li>HOC ( hight - order components) like withData </li>
                <li>NPM</li>
                <li>git - <Link to='https://github.com/PavloLapan/StarDadabase-'>https://github.com/PavloLapan/StarDadabase-</Link></li>
            </ul>
        </div>
    )
};
export default Describe;