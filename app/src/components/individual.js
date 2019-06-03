import React from 'react';
import { Link } from 'react-router-dom';

const Individual = (props) => {
    const id = props.match.params.id;
    const project = props.data.find(project => `${project.id}` === id);

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>hello Norah McKenzie</h1>
            <h1>{project.name}</h1>
            <h1>{project.description}</h1>
        </div>
    )
}

export default Individual;

