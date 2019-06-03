import React from 'react';
import { Link, Route } from 'react-router-dom';




class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }




render() {
    console.log(this.props.data)
    return(
        <div>  
            <form onSubmit={this.props.addItem}>
                <input placeholder='name' name='name' value={this.props.name} onChange={this.props.handleChanges} />
                <input placeholder='description' name='description' value={this.props.description} onChange={this.props.handleChanges}/>
                <button onClick={this.props.addItem} > Add Item </button>
            </form>
            <Link to='/'>Home</Link>
            
            {this.props.data.map(item => {
                
                return <div key={Math.random()}>
                    <Link to={`/projects/${item.id}`} >
                        <h3>{item.name}</h3>
                        <h4>{item.description}</h4>
                    </Link>
                    <button onClick={() => this.props.deleteItem(item.id)}>Delete Item</button>
                </div>
            })}

          
        </div>
        
        )
    } 
}



export default Projects;