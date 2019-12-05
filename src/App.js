import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
   constructor() {
     super()
     this.state = {
       TodoList: [],
       todo: ''
     }
   }

   handleChange = event => {
      this.setState({todo: event.target.value})
   }

   handleSubmit = event => {
      event.preventDefault()
      this.setState(prevState => {

        const todoObject = {
          task: prevState.todo,
          id: Date.now(),
          completed: false
        }
        return {
          todo: "",
          TodoList: [...prevState.TodoList, todoObject]
        }
      })
   }


  render() {
    return (
      <div>
        <TodoForm handleChange={this.handleChange} todo={this.state.todo} handleSubmit={this.handleSubmit}/>
        <TodoList TodoList={this.state.TodoList} />
      </div>
    );
  }
}

export default App;
