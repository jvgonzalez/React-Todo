import React from 'react';

class Todo extends React.Component {
  render() {
    return(

       
       <div>
        <li> {this.props.todo.task} </li>
        <button>Completed </button>
        <button> Delete </button>


       </div>
        
        

    
    )
  }
}

export default Todo;