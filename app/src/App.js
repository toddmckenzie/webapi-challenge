import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Projects from './components/projects';
import Actions from './components/actions';
import Home from './components/home'
import axios from 'axios';
import Individual from './components/individual';



class App extends React.Component{
    constructor() {
      super();
      this.state = {
        data: [],
        name: '',
        description: ''
      }
    }
  componentWillMount() {
    axios.get('http://localhost:5000/projects').then(res => {
      this.setState({
        data: res.data
      })
    })
      .catch(err => {
        console.log(err)
    })
  }
  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
}

fetchProjects = () => {
    axios.get('http://localhost:5000/projects').then(res => {
            this.setState({
                data: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}



addItem = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/projects', { name: this.state.name, description: this.state.description })
    .then(res => {
        this.setState({
            data: [...this.state.data, res.data],
            name: '',
            description: ''
        })
    })
}

deleteItem = (id) => {
    console.log(id + ' here is id')
    // e.preventDefault();
    axios.delete(`http://localhost:5000/projects/${id}`)
        .then(res => {
            this.fetchProjects();
        })
        .catch(error => {
            console.log(error)
        })
    
}
  render() {
    console.log('hello moto')
    console.log(this.state.data)
    console.log('heyehyehye')
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path={'/projects'} render={(props) => ( <Projects {...props} data={this.state.data} name={this.state.name} description={this.state.description} 
      deleteItem={this.deleteItem} addItem={this.addItem} handleChanges={this.handleChanges} fetchProjects={this.fetchProjects} /> )} />
      <Route path={`/projects/:id`} render={(props) => ( <Individual {...props} data={this.state.data} /> )} />
      <Route path={'/actions'} component={Actions} />
    </div>
    );
  }
}

export default App;
