import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

componentDidMount() {
    axios.get('http://localhost:5000/actions').then(res => {
            this.setState({
                data: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

render() {
    console.log(this.state.data)
    return(
        <div>
            <Link to='/'>Home</Link>
            <div>>{this.state.data.map( item => 
                <h1 key={Math.random()}>{item.description}</h1>
                )}</div>
        </div>
        
        )
    } 
}



export default Projects;