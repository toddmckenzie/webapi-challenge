import React from 'react';
import { Link } from 'react-router-dom';

function home() {

    return (
        <div>
            <Link to='/projects'>Projects</Link>
            <Link to='/actions'>Actions</Link>
        </div>
    )
}



export default home;
